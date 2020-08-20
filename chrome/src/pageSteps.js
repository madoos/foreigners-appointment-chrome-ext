import { click, selectIndex, Monad, querySelector, setProperty, setValue } from './helpers';
import { pipeK, curry } from 'ramda';
import IO from 'crocks/IO';
import { speak } from './speechSynthesis';

const SELECTORS = {
	BTN_ACCEPT: '#btnAceptar',
	BTN_NEXT: '#btnSiguiente',
	BTN_ENTER: '#btnEntrar',
	BTN_SEND: '#btnEnviar',
	BTN_SUBMIT: '#btnSubmit',
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

const MESSAGES = {
	SOLVE_CAPTCHA: 'Resolver captcha',
	NO_APPOINTMENT: 'NO HAY SUFICIENTES CITAS DISPONIBLES',
	HAVE_APPOINTMENT: 'Si tienes citas disponibles'
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
		const value = btn.disabled ? speak(MESSAGES.SOLVE_CAPTCHA) : click(btn);
		return IO.of(yield value);
	});

	return IO.of(setInterval(() => action.run(), ms));
});

// selectCity :: () -> IO ()
export const selectCity = pipeK(
	() => selectIndex(SELECTORS.OPT_CITY, 33), // 33 is Madrid City
	_clickAcceptButton
);

// selectProcessType :: () -> IO ()
export const selectProcessType = pipeK(
	() => selectIndex(SELECTORS.OPT_PROCESS_TYPE, 19), // select Huella y renovación
	_clickAcceptButton
);

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
		yield notifySolveCaptcha(250, sendBtn);

		return IO.of();
	});

// askForAppointment :: () -> IO ()
export const askForAppointment = () => click(SELECTORS.BTN_SEND);

// selectOffice :: () -> IO ()
export const selectOffice = pipeK(
	() => selectIndex(SELECTORS.OPT_OFFICE, 0), // selecciona oficina
	_clickNextButton
);

export const setContactInformation = (user) =>
	Monad.do(function*() {
		const telInput = yield querySelector(SELECTORS.INP_TEL);
		const emailInput = yield querySelector(SELECTORS.INP_EMAIL);
		const repeatEmailInput = yield querySelector(INP_REPEAT_EMAIL);

		yield setValue(user.tel, telInput);
		yield setValue(user.email, emailInput);
		yield setValue(user.email, repeatEmailInput);
		yield _clickNextButton();

		return IO.of();
	});

// verifyAppointment :: () -> IO ()
export const verifyAppointment = () =>
	Monad.do(function*() {
		const { NO_APPOINTMENT, HAVE_APPOINTMENT } = MESSAGES;
		const messageArea = yield querySelector(SELECTORS.TEXT_NO_APPOINTMENT);
		const submitBtn = yield querySelector(SELECTORS.BTN_SUBMIT);
		const msg = messageArea.textContent;
		const action = msg === NO_APPOINTMENT ? click(submitBtn) : speak(HAVE_APPOINTMENT);
		return IO.of(yield action);
	});
