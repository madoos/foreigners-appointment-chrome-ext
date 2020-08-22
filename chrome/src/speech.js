import IO from 'crocks/IO';
import { getChromeExtensionURL } from './chromeRuntime';
import { pipeK } from 'ramda';

// sayRepeatedly :: String -> IO ()
export const sayRepeatedly = pipeK(getChromeExtensionURL, (file) =>
	IO(() => {
		const audio = new Audio(file);
		audio.playbackRate = 1.5;
		audio.loop = true;
		audio.play();
	})
);

// say :: String -> IO ()
export const say = pipeK(getChromeExtensionURL, (file) =>
	IO(() => {
		const audio = new Audio(file);
		audio.playbackRate = 1.5;
		audio.play();
	})
);
