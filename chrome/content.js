import { getChromeMessages, sendChromeMessageToPopup } from './src/chromeRuntime';
import { pipe, chain, map, filter, pipeK, merge, split, nth } from 'ramda';
import { saveUser, getUser } from './src/storage';
import { ioToStream } from './src/naturalTransformations';
import option from 'crocks/pointfree/option';
import { isNotNil, tapF, getLocation } from './src/helpers';
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
	verifyAppointment,
	noOfficeAvailable
} from './src/pageSteps';

const ReaderIO = ReaderT(IO);

const userCodes = {
	MADRID_CITY: 33,
	PROCESS_RENOVATION_AND_FINGERPRINT: 19,
	FIRST_OFFICE_AVAILABLE: 0
};

// stepsByPage :: { PageName: Reader (IO ()) }
const stepsByPage = {
	'index.html': () => ReaderIO((user) => selectCity(user.MADRID_CITY)),
	acOpcDirect: () => ReaderIO((user) => selectCity(user.MADRID_CITY)),
	acInfo: ReaderIO.liftFn(enterToProcedure),
	citar: () => ReaderIO((user) => selectProcessType(user.PROCESS_RENOVATION_AND_FINGERPRINT)),
	acEntrada: () => ReaderIO((user) => setPersonalInformation(user)),
	acValidarEntrada: ReaderIO.liftFn(askForAppointment),
	5: ReaderIO.liftFn(verifyAppointment),
	6: () => ReaderIO((user) => selectOffice(user.FIRST_OFFICE_AVAILABLE)),
	7: () => ReaderIO((user) => setContactInformation(user)),
	acCitar: ReaderIO.liftFn(noOfficeAvailable)
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

// getPageName :: URL -> IO String
const getPageName = pipe(getLocation, map(pipe(split('/'), nth(4), split('?'), nth(0))));

// fillPageFormSteps :: () -> Reader (IO ())
const fillPageFormSteps = pipeK(
	ReaderIO.liftFn(getPageName),
	(pageName) => {
		debugger;
		return stepsByPage[pageName]();
	} // run page Steps
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
