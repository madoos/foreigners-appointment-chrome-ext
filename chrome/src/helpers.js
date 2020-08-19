import { complement, isNil, curryN, pipeK, map, addIndex } from 'ramda';
import safe from 'crocks/Maybe/safe';
import IO from 'crocks/IO';
import { fromEvent } from 'most';
import { ioToStream } from './naturalTransformations';

// isNotNil :: a -> Boolean
export const isNotNil = complement(isNil);

// stringify :: JSON -> String
export const stringify = (x) => JSON.stringify(x, null, 2);

// safeWhenIsNotNil :: a -> Maybe a
export const safeWhenIsNotNil = safe(isNotNil);

// parse :: String -> JSON
export const parse = JSON.parse;

// getElementById :: String -> IO HTMLElement
export const getElementById = (id) => IO(() => document.getElementById(id));

// streamFromEvent :: String -> HTMLElement -> Stream a
export const streamFromEvent = curryN(2, fromEvent);

// clickStreamFromId :: String -> Stream Events
export const clickStreamFromId = pipeK(ioToStream(getElementById), streamFromEvent('click'));

export const mapIndexed = addIndex(map);
