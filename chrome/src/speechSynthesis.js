import IO from 'crocks/IO';

// speak :: String -> IO ()
export const speak = (text) =>
	IO(() => {
		const msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	});
