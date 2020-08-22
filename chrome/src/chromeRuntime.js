import { create } from '@most/create';
import IO from 'crocks/IO';
import { curry } from 'ramda';
import Async from 'crocks/Async';

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

// chromeLocalStorageSet :: String -> a -> Async Error a
export const chromeLocalStorageSet = curry((key, val) =>
	Async((_, resolve) => {
		chrome.storage.sync.set({ [key]: val }, () => {
			chrome.runtime.error ? reject(chrome.runtime.error) : resolve(val);
		});
	})
);

// chromeLocalStorageGet :: String -> a -> Async Error a
export const chromeLocalStorageGet = curry((key) =>
	Async((reject, resolve) => {
		chrome.storage.sync.get(key, (value) => {
			chrome.runtime.error ? reject(chrome.runtime.error) : resolve(value);
		});
	})
);

// chromeTabsCreate :: URL -> IO ()
export const chromeTabsCreate = (url) => IO(() => chrome.tabs.create({ url }));
