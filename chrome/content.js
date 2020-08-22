import { pipe, chain, map, pipeK, merge, split, nth } from 'ramda';
import { getUser } from './src/storage';
import { getLocation, logA2 } from './src/helpers';
import IO from 'crocks/IO';
import ReaderT from 'crocks/Reader/ReaderT';
import { ioToAsync } from './src/naturalTransformations';
import eitherToAsync from 'crocks/Async/eitherToAsync';

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

// getPageName :: URL -> IO String
const getPageName = pipe(getLocation, map(pipe(split('/'), nth(4), split('?'), nth(0))));

// fillPageFormSteps :: () -> Reader (IO ())
const fillPageFormSteps = pipeK(ReaderIO.liftFn(getPageName), (pageName) => stepsByPage[pageName]());

const fillPageFormStepsWithUserData = pipe(
	getUser,
	map(map(merge(userCodes))),
	chain(eitherToAsync),
	chain(ioToAsync((user) => fillPageFormSteps().runWith(user)))
);

window.onload = function() {
	fillPageFormStepsWithUserData().fork(logA2('Exception:'), logA2('Data:'));
};
