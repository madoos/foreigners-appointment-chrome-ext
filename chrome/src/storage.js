import IO from 'crocks/IO'
import { stringify, safeWhenIsNotNil, parse } from './helpers'
import { pipe, map } from 'ramda'

const KEYS = {
    FRONT_STEP_KEY: "APPOINTMENT_STEP",
    USER_DATA: "APPOINTMENT_STEP_USER_DATA"
}

// setNextStep :: Number -> IO ()
export const setNextStep = pipe(
    String,
    (step) => IO(() => localStorage.setItem(KEYS.FRONT_STEP_KEY, step))
)

// getNextStep :: () -> IO (Maybe Number)
export const getNextStep = pipe(
    () => IO(() => localStorage.getItem(KEYS.FRONT_STEP_KEY)),
    map(safeWhenIsNotNil),
    map(map(Number))
)

// saveUserData :: User -> IO ()
export const saveUser = pipe(
    stringify,
    (record) => IO(() => localStorage.setItem(KEYS.USER_DATA, record))
)

// getUser :: () -> IO (Maybe User)
const getUser = pipe(
    () => IO(() => localStorage.getItem(KEYS.USER_DATA)),
    map(safeWhenIsNotNil),
    map(map(parse))
)