import { clickStreamFromId, getElementById, mapIndexed } from './src/helpers';
import { sendChromeMessageToActiveTab, getChromeMessages } from './src/chromeRuntime';
import { ioToStream } from './src/naturalTransformations';
import { Map } from 'immutable-ext';
import { pipe, chain, map, always, sequence, partial, curry, when, toUpper, trim, toLower, evolve } from 'ramda';
import isString from 'crocks/predicates/isString';
import IO from 'crocks/IO';
import { take } from 'most/src/';

const FORM_IDS = {
	docNumber: 'docNumber',
	isPassport: 'isPassport',
	name: 'name',
	country: 'country',
	tel: 'tel',
	email: 'email',
	cardExpiration: 'cardExpiration'
};

// getValueFromInput :: HTMLElement -> String | Boolean
const getValueFromInput = (input) => (input.type === 'checkbox' ? input.checked : input.value);

// setValueFromInput :: (HTMLElement, a) -> IO HTMLElement
const setValueFromInput = (input, value) =>
	IO(() => {
		const prop = input.type === 'checkbox' ? 'checked' : 'value';
		input[prop] = value;
		return input;
	});

// getUserDataFromForm :: { name: id } -> IO { name: String | Boolean }
const getUserDataFromForm = pipe(
	Map,
	map(getElementById),
	map(map(getValueFromInput)),
	sequence(IO.of),
	map((x) => x.toJS()),
	map(map(when(isString, pipe(trim, toUpper)))),
	map(evolve({ email: toLower }))
);

// setUserDataToForm :: { name: id } -> { name: value } -> IO { name: HTMLElement }
const setUserDataToForm = curry((selectors, user) => {
	return pipe(
		Map,
		map(getElementById),
		mapIndexed((io, key) => chain((el) => setValueFromInput(el, user[key]), io)),
		sequence(IO.of),
		map((x) => x.toJS())
	)(selectors);
});

// sendUserDataWhenClick :: String -> Stream ()
const sendUserDataWhenClick = pipe(
	clickStreamFromId,
	map(always(FORM_IDS)),
	chain(ioToStream(getUserDataFromForm)),
	chain(sendChromeMessageToActiveTab)
);

const setUserDataToUI = pipe(getChromeMessages, partial(take, [ 1 ]), chain(ioToStream(setUserDataToForm(FORM_IDS))));

window.onload = function() {
	sendUserDataWhenClick('save').forEach(console.log);
	setUserDataToUI().forEach(console.log, console.error, console.log);
};
