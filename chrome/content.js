import { steps } from './src/pageSteps';
import { getChromeMessages, sendChromeMessageToPopup } from './src/chromeRuntime';
import { pipe, chain, map, filter } from 'ramda';
import { saveUser, getUser } from './src/storage';
import { ioToStream } from './src/naturalTransformations';
import option from 'crocks/pointfree/option';
import { isNotNil } from './src/helpers';
import { periodic } from 'most';

// persistUserDataFromPopup :: () -> Stream ()
const persistUserDataFromPopup = pipe(getChromeMessages, chain(ioToStream(saveUser)));

// sendStoredUserToPopup :: () -> Stream ()
const sendStoredUserToPopup = pipe(
	() => periodic(500),
	chain(ioToStream(getUser)),
	map(option(null)),
	filter(isNotNil),
	chain(sendChromeMessageToPopup)
);

window.onload = function() {
	persistUserDataFromPopup().forEach(() => console.log('User Stored'));
	sendStoredUserToPopup().forEach(console.log, console.error, () => console.log('Sended stored User'));

	//const step = 1; // window.location.href.includes('index.html') ? 1 : getNextStep();
	//steps[step]();
};
