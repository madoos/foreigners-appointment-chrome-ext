import { clickStreamFromId, getElementById, fillForm, getInputValue, logA2, closePopup } from './src/helpers';
import { ioToStream, asyncToStream, ioToAsync } from './src/naturalTransformations';
import isString from 'crocks/predicates/isString';
import IO from 'crocks/IO';
import { Map } from 'immutable-ext';
import { saveUser, getUser } from './src/storage';
import { pipe, chain, map, always, sequence, when, toUpper, trim, toLower, evolve, pipeK } from 'ramda';
import eitherToAsync from 'crocks/Async/eitherToAsync';
import { chromeTabsCreate } from './src/chromeRuntime';

const FORM_IDS = {
	docNumber: 'docNumber',
	isPassport: 'isPassport',
	name: 'name',
	country: 'country',
	tel: 'tel',
	email: 'email',
	cardExpiration: 'cardExpiration'
};

// sanitizeUser :: User -> User
const sanitizeUser = pipe(map(when(isString, pipe(trim, toUpper))), evolve({ email: toLower }));

// fillFormWithUserData :: () -> { name: value } -> IO { id: HTMLElement }
const fillFormWithUserData = fillForm(FORM_IDS);

// getUserDataFromForm :: () -> IO { name: String | Boolean }
const getUserDataFromForm = pipe(
	always(FORM_IDS),
	Map,
	map(getElementById),
	map(map(getInputValue)),
	sequence(IO.of),
	map((x) => x.toJS()),
	map(sanitizeUser)
);

// saveUserWhenClickButton :: String -> Stream ()
const saveUserWhenClickButton = pipe(
	clickStreamFromId,
	chain(ioToStream(getUserDataFromForm)),
	map(sanitizeUser),
	chain(asyncToStream(saveUser)),
	chain(ioToStream(fillFormWithUserData)),
	chain(ioToStream(closePopup))
);

const openAppointmentPage = pipeK(
	clickStreamFromId,
	ioToStream(() => chromeTabsCreate('https://sede.administracionespublicas.gob.es/icpplus/index.html'))
);

// fillFormPopupFromStoredUser :: () -> Async Error { id: HTMLElement }
const fillFormPopupFromStoredUser = pipe(getUser, chain(eitherToAsync), chain(ioToAsync(fillFormWithUserData)));

window.onload = function() {
	fillFormPopupFromStoredUser().fork(logA2('Exception:'), logA2('Value'));
	saveUserWhenClickButton('save').forEach(logA2('Value'), logA2('Exception:'));
	openAppointmentPage('open-page').forEach(logA2('Value'), logA2('Exception:'));
};
