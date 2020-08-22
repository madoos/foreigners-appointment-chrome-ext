import { create } from '@most/create';
import IO from 'crocks/IO';

// getChromeMessages :: () -> Stream a
export const getChromeMessages = () =>
	create((next) => chrome.extension.onMessage.addListener((message) => next(message)));

// sendChromeMessage :: a -> Stream ()
export const sendChromeMessageToActiveTab = (data) =>
	create((next, end) => {
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			next(chrome.tabs.sendMessage(tabs[0].id, data));
			end();
		});
	});

// sendChromeMessageToPopUp :: a -> Stream ()
export const sendChromeMessageToPopup = (data) =>
	create((next, end) => {
		next(chrome.runtime.sendMessage(data));
		end();
	});

// getChromeExtensionURL :: String -> IO Path
export const getChromeExtensionURL = (file) => IO(() => chrome.runtime.getURL(file));
