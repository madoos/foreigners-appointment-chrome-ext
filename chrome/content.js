import { steps } from './src/pageSteps';
import { getChromeMessages } from './src/chromeRuntime';
import { pipe, chain } from 'ramda';
import { saveUser } from './src/storage';
import { ioToStream } from './src/naturalTransformations';

// persistUserDataOnChromeMessage :: () -> Stream ()
const persistUserDataOnChromeMessage = pipe(getChromeMessages, chain(ioToStream(saveUser)));

window.onload = function() {
	persistUserDataOnChromeMessage().forEach(() => console.log('User Stored'));

	//const step = 1; // window.location.href.includes('index.html') ? 1 : getNextStep();
	//steps[step]();
};
