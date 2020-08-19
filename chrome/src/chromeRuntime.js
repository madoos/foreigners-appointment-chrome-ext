import { create } from '@most/create';

// getChromeMessages :: () -> Stream a
export const getChromeMessages = () =>
	create((next) => chrome.extension.onMessage.addListener((message) => next(message)));

// sendChromeMessage :: a -> Stream ()
export const sendChromeMessage = (data) =>
	create((next, end) => {
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			next(chrome.tabs.sendMessage(tabs[0].id, data));
			end();
		});
	});
