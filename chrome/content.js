import { getChromeMessages, sendChromeMessageToPopup } from './src/chromeRuntime';
import { pipe, chain, map, filter, pipeK, merge } from 'ramda';
import { saveUser, getUser, getNextStep, setNextStep } from './src/storage';
import { ioToStream } from './src/naturalTransformations';
import option from 'crocks/pointfree/option';
import { isNotNil, locationIncludes, tapF } from './src/helpers';
import { periodic } from 'most';
import IO from 'crocks/IO';
import ReaderT from 'crocks/Reader/ReaderT';

import {
	selectCity,
	selectProcessType,
	enterToProcedure,
	setPersonalInformation,
	askForAppointment,
	selectOffice,
	setContactInformation,
	verifyAppointment
} from './src/pageSteps';

const ReaderIO = ReaderT(IO);

const userCodes = {
	MADRID_CITY: 33,
	PROCESS_RENOVATION_AND_FINGERPRINT: 19,
	FIRST_OFFICE_AVAILABLE: 0
};

const steps = {
	1: () => ReaderIO((user) => selectCity(user.MADRID_CITY)),
	2: () => ReaderIO((user) => selectProcessType(user.PROCESS_RENOVATION_AND_FINGERPRINT)),
	3: ReaderIO.liftFn(enterToProcedure),
	4: () => ReaderIO((user) => setPersonalInformation(user)),
	5: ReaderIO.liftFn(askForAppointment),
	6: () => ReaderIO((user) => selectOffice(user.FIRST_OFFICE_AVAILABLE)),
	7: () => ReaderIO((user) => setContactInformation(user)),
	8: ReaderIO.liftFn(verifyAppointment)
};

// persistUserDataFromPopup :: () -> Stream ()
const persistUserDataFromPopup = pipe(getChromeMessages, chain(ioToStream(saveUser)));

// sendStoredUserToPopup :: () -> Stream ()
const sendStoredUserToPopup = pipe(
	() => periodic(500),
	chain(ioToStream(getUser)),
	map(option(null)),
	filter(isNotNil),
	chain(sendChromeMessageToPopup)
);

// fillPageFormSteps :: () -> Reader (IO ())
const fillPageFormSteps = pipeK(
	ReaderIO.liftFn(() => locationIncludes('index.html')),
	ReaderIO.liftFn((isIndexPage) => (isIndexPage ? IO.of(1) : getNextStep())),
	ReaderIO.liftFn(tapF((step) => setNextStep(step + 1))),
	(step) => steps[step]() // run page Steps
);

const fillPageFormStepsWithUserData = pipe(
	getUser, //
	map(option({})), //
	map(merge(userCodes)),
	chain((user) => fillPageFormSteps().runWith(user)) //
);

window.onload = function() {
	persistUserDataFromPopup().forEach(() => console.log('User Stored'));
	sendStoredUserToPopup().forEach(console.log, console.error, () => console.log('Sended stored User'));
	fillPageFormStepsWithUserData().run();
};
