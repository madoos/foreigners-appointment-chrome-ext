import IO from 'crocks/IO';
import { stringify, safeWhenIsNotNil, parse } from './helpers';
import { pipe, map } from 'ramda';

const KEYS = {
	FRONT_STEP_KEY: 'APPOINTMENT_STEP',
	USER_DATA: 'APPOINTMENT_STEP_USER_DATA'
};

// saveUserData :: User -> IO ()
export const saveUser = pipe(stringify, (record) => IO(() => localStorage.setItem(KEYS.USER_DATA, record)));

// getUser :: () -> IO (Maybe User)
export const getUser = pipe(
	() => IO(() => localStorage.getItem(KEYS.USER_DATA)),
	map(safeWhenIsNotNil),
	map(map(parse))
);
