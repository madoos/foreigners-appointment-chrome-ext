import { complement, isNil, curryN, pipeK, map, addIndex, always, curry } from 'ramda';
import safe from 'crocks/Maybe/safe';
import IO from 'crocks/IO';
import { fromEvent, from } from 'most';
import { ioToStream } from './naturalTransformations';
import { isString } from 'crocks/predicates';

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

// mapIndexed :: ((a, String) -> b) -> F a -> F b
export const mapIndexed = addIndex(map);

// selectIndex :: (String, Number) -> IO ()
export const selectIndex = (selector, index) => IO(() => (document.querySelector(selector).selectedIndex = index));

// click :: ( String | HTMLElement )-> IO ()
export const click = (selector) =>
	IO(() => {
		const el = isString(selector) ? document.querySelector(selector) : selector;
		return el.click();
	});

// locationIncludes :: String -> IO Boolean
export const locationIncludes = (x) => IO(() => window.location.href.includes(x));

// tapF :: Functor F => a -> F b -> a -> F a
export const tapF = (f) => (x) => map(always(x), f(x));

export const Monad = {
	do: (gen) => {
		let g = gen();
		const step = (value) => {
			const result = g.next(value);
			if (result.done) {
				g = gen();
				return result.value;
			} else {
				return result.value.chain(step);
			}
		};
		return step();
	}
};

// querySelector :: String -> IO HTMLElement
export const querySelector = (selector) => IO(() => document.querySelector(selector));

// setProperty :: String -> String -> HTMLElement -> IO HTMLElement
export const setProperty = curry((prop, value, el) => {
	return IO(() => {
		el[prop] = value;
		return el;
	});
});

// setProperty :: String -> HTMLElement -> IO HTMLElement
export const setValue = setProperty('value');
