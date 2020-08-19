import { clickStreamFromId, getElementById } from './src/helpers';
import { sendChromeMessage } from './src/chromeRuntime';
import { ioToStream } from './src/naturalTransformations';
import { Map } from 'immutable-ext';
import { pipe, chain, map, always, sequence } from 'ramda';
import IO from 'crocks/IO';

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

// getUserDataFromForm :: { name: id } -> IO { name: String | Boolean }
const getUserDataFromForm = pipe(
	Map,
	map(getElementById),
	map(map(getValueFromInput)),
	sequence(IO.of),
	map((x) => x.toJS())
);

// sendUserDataWhenClick :: String -> Stream ()
const sendUserDataWhenClick = pipe(
	clickStreamFromId,
	map(always(FORM_IDS)),
	chain(ioToStream(getUserDataFromForm)),
	chain(sendChromeMessage)
);

window.onload = function() {
	sendUserDataWhenClick('save').forEach(console.log);
};
