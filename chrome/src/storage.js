import { pipe, map, prop } from 'ramda';
import { chromeLocalStorageGet, chromeLocalStorageSet } from './chromeRuntime';
import { safeEither } from './helpers';
import { NO_USER_STORED } from './exceptions';

const KEYS = {
	USER: 'APPOINTMENT_STEP_USER_DATA'
};

// saveUserData :: User -> Async Error User
export const saveUser = chromeLocalStorageSet(KEYS.USER);

// getUser :: () -> Async Error (Either exception User)
export const getUser = pipe(
	() => chromeLocalStorageGet(KEYS.USER),
	map(prop(KEYS.USER)),
	map(safeEither(NO_USER_STORED))
);
