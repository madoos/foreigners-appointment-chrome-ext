import { getChromeMessages, sendChromeMessageToPopup } from './src/chromeRuntime';
import { pipe, chain, map, filter, pipeK } from 'ramda';
import { saveUser, getUser, getNextStep, setNextStep } from './src/storage';
import { ioToStream } from './src/naturalTransformations';
import option from 'crocks/pointfree/option';
import { isNotNil, locationIncludes, tapF, exec } from './src/helpers';
import { periodic } from 'most';
import IO from 'crocks/IO';
import ReaderT from 'crocks/Reader/ReaderT';

const ReaderIO = ReaderT(IO);

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

export const steps = {
	1: ReaderIO.liftFn(selectCity),
	2: ReaderIO.liftFn(selectProcessType),
	3: ReaderIO.liftFn(enterToProcedure),
	4: () => ReaderIO((user) => setPersonalInformation(user)),
	5: ReaderIO.liftFn(askForAppointment),
	6: ReaderIO.liftFn(selectOffice),
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

const fillPageFormSteps = pipeK(
	ReaderIO.liftFn(() => locationIncludes('index.html')),
	ReaderIO.liftFn((isIndexPage) => (isIndexPage ? IO.of(1) : getNextStep())),
	ReaderIO.liftFn(tapF((step) => setNextStep(step + 1))),
	(step) => steps[step]() // run page Steps
);

const fillPageFormStepsWithUserData = pipe(
	getUser, //
	map(option({})), //
	chain((user) => fillPageFormSteps().runWith(user)) //
);

window.onload = function() {
	persistUserDataFromPopup().forEach(() => console.log('User Stored'));
	sendStoredUserToPopup().forEach(console.log, console.error, () => console.log('Sended stored User'));
	fillPageFormStepsWithUserData().run();
};
