import { complement, isNil, curryN, pipeK, map, addIndex, always, curry, pipe, sequence, chain } from 'ramda';
import safe from 'crocks/Maybe/safe';
import IO from 'crocks/IO';
import { fromEvent } from 'most';
import { ioToStream } from './naturalTransformations';
import { isString } from 'crocks/predicates';
import { Left, Right } from 'crocks/Either';
import { Map } from 'immutable-ext';

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
export const selectIndex = curry((selector, index) =>
	IO(() => (document.querySelector(selector).selectedIndex = index))
);

// click :: ( String | HTMLElement )-> IO ()
export const click = (selector) =>
	IO(() => {
		const el = isString(selector) ? document.querySelector(selector) : selector;
		return el.click();
	});

// getLocation :: String -> IO URL
export const getLocation = (x) => IO(() => window.location.href);

// tapF :: Functor F => a -> F b -> a -> F a
export const tapF = (f) => (x) => map(always(x), f(x));

// Monad.do :: Monad M =>  (a)* -> M b -> M b
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

// getInputValue :: HTMLElement -> String | Boolean
export const getInputValue = (input) => (input.type === 'checkbox' ? input.checked : input.value);

// setInputValue :: (HTMLElement, a) -> IO HTMLElement
export const setInputValue = (input, value) =>
	IO(() => {
		const prop = input.type === 'checkbox' ? 'checked' : 'value';
		input[prop] = value;
		return input;
	});

// fillForm :: { name: id } -> { name: value } -> IO { id: HTMLElement }
export const fillForm = curry((selectors, user) => {
	return pipe(
		Map,
		map(getElementById),
		mapIndexed((io, key) => chain((el) => setInputValue(el, user[key]), io)),
		sequence(IO.of),
		map((x) => x.toJS())
	)(selectors);
});

// logA2 :: String -> a -> ()
export const logA2 = curry((tag, x) => console.log(tag, x));

// String -> (() -> ())
export const logA0 = (tag) => () => console.log(tag);

// safeEither :: b -> a -> either b a
export const safeEither = curry((leftValue, x) => (isNil(x) ? Left(leftValue) : Right(x)));

// closePopup :: () -> IO ()
export const closePopup = () => IO(() => window.close());
