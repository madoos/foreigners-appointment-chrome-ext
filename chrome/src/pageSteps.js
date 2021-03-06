import { click, selectIndex, Monad, querySelector, setProperty, setValue } from './helpers';
import { pipeK, curry, always, chain, pipe } from 'ramda';
import IO from 'crocks/IO';
import { sayRepeatedly, say } from './speech';

const SELECTORS = {
	BTN_ACCEPT: '#btnAceptar',
	BTN_NEXT: '#btnSiguiente',
	BTN_ENTER: '#btnEntrar',
	BTN_SEND: '#btnEnviar',
	BTN_SUBMIT: '#btnSubmit',
	BTN_EXIT: '#btnSalir',
	OPT_CITY: '#form',
	OPT_PROCESS_TYPE: '#tramiteGrupo\\[0\\]',
	OPT_OFFICE: '#idSede',
	INP_NATIONALITY: '#txtPaisNac',
	INP_DOC_NUMBER: '#txtIdCitado',
	INP_NAME: '#txtDesCitado',
	INP_DATE: '#txtFecha',
	INP_TEL: '#txtTelefonoCitado',
	INP_EMAIL: '#emailUNO',
	INP_REPEAT_EMAIL: '#emailDOS',
	CB_DOC_TYPE: '#rdbTipoDocPas',
	TEXT_NO_APPOINTMENT: '#mensajeInfo > p.mf-msg__info > span > b'
};

const AUDIO_MESSAGES = {
	SOLVE_CAPTCHA: 'audio/solve-captcha.mp3',
	HAVE_APPOINTMENT: 'audio/have-appointment.mp3'
};

const MESSAGES = {
	NO_APPOINTMENT: 'NO HAY SUFICIENTES CITAS DISPONIBLES'
};

// _clickAcceptButton :: () -> IO ()
const _clickAcceptButton = () => click(SELECTORS.BTN_ACCEPT);

// _clickNextButton :: () -> IO ()
const _clickNextButton = () => click(SELECTORS.BTN_NEXT);

// getIndexByValue :: (HTMLElement, value) -> String
const getIndexByValue = (options, value) => Array.from(options).find((x) => x.text === value).index;

// notifySolveCaptcha :: Number -> HTMLElement -> IO ()
const notifySolveCaptcha = curry((ms, btn) => {
	const action = Monad.do(function*() {
		const value = btn.disabled ? say(AUDIO_MESSAGES.SOLVE_CAPTCHA) : click(btn);
		return IO.of(yield value);
	});

	return IO.of(setInterval(() => action.run(), ms));
});

// selectCity :: Number -> IO ()
export const selectCity = pipeK(selectIndex(SELECTORS.OPT_CITY), _clickAcceptButton);

// selectProcessType :: Number -> IO ()
export const selectProcessType = pipeK(selectIndex(SELECTORS.OPT_PROCESS_TYPE), _clickAcceptButton);

// enterToProcedure :: () -> IO ()
export const enterToProcedure = () => click(SELECTORS.BTN_ENTER);

// setPersonalInformation :: User -> Stream ()
export const setPersonalInformation = (user) =>
	Monad.do(function*() {
		const sendBtn = yield querySelector(SELECTORS.BTN_SEND);
		const countryNationalityInput = yield querySelector(SELECTORS.INP_NATIONALITY);
		const documentNumberInput = yield querySelector(SELECTORS.INP_DOC_NUMBER);
		const nameInput = yield querySelector(SELECTORS.INP_NAME);
		const cardExpirationInput = yield querySelector(SELECTORS.INP_DATE);
		const countryIndex = getIndexByValue(countryNationalityInput, user.country);

		if (user.isPassport) yield click(SELECTORS.CB_DOC_TYPE);

		yield setValue(user.docNumber, documentNumberInput);
		yield setValue(user.name, nameInput);
		yield setValue(user.cardExpiration, cardExpirationInput);
		yield setProperty('selectedIndex', countryIndex, countryNationalityInput);

		const action = notifySolveCaptcha(1000, sendBtn);

		return IO.of(yield action);
	});

// askForAppointment :: () -> IO ()
export const askForAppointment = () => click(SELECTORS.BTN_SEND);

// selectOffice :: Number -> IO ()
export const selectOffice = pipeK(selectIndex(SELECTORS.OPT_OFFICE), _clickNextButton);

// setContactInformation :: User -> IO ()
export const setContactInformation = (user) =>
	Monad.do(function*() {
		const telInput = yield querySelector(SELECTORS.INP_TEL);
		const emailInput = yield querySelector(SELECTORS.INP_EMAIL);
		const repeatEmailInput = yield querySelector(SELECTORS.INP_REPEAT_EMAIL);

		yield setValue(user.tel, telInput);
		yield setValue(user.email, emailInput);
		yield setValue(user.email, repeatEmailInput);
		yield _clickNextButton();

		return IO.of();
	});

// verifyAppointment :: () -> IO ()
export const verifyAppointment = () =>
	Monad.do(function*() {
		const messageArea = yield querySelector(SELECTORS.TEXT_NO_APPOINTMENT);
		const submitExit = yield querySelector(SELECTORS.BTN_EXIT);
		const msg = messageArea.textContent;
		const action =
			msg === MESSAGES.NO_APPOINTMENT ? click(submitExit) : sayRepeatedly(AUDIO_MESSAGES.HAVE_APPOINTMENT);
		return IO.of(yield action);
	});

// noOfficeAvailable :: () => IO ()
export const noOfficeAvailable = pipe(always(SELECTORS.BTN_EXIT), querySelector, chain(click));
