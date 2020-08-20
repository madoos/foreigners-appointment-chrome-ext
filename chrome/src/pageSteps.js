import { click, selectIndex, Monad, querySelector, setProperty, setValue } from './helpers';
import { pipeK, curry } from 'ramda';
import IO from 'crocks/IO';
import { speak } from './speechSynthesis';

// _clickAcceptButton :: () -> IO ()
const _clickAcceptButton = () => click('#btnAceptar');

// _clickNextButton :: () -> IO ()
const _clickNextButton = () => click('#btnSiguiente');

// getIndexByValue :: (HTMLElement, value) -> String
const getIndexByValue = (options, value) => Array.from(options).find((x) => x.text === value).index;

// notifySolveCaptcha :: Number -> HTMLElement -> IO ()
const notifySolveCaptcha = curry((ms, btn) => {
	const action = Monad.do(function*() {
		const value = btn.disabled ? speak('Resolver captcha') : click(btn);
		return IO.of(yield value);
	});

	return IO.of(setInterval(() => action.run(), ms));
});

// selectCity :: () -> IO ()
export const selectCity = pipeK(
	() => selectIndex('#form', 33), // 33 is Madrid City
	_clickAcceptButton
);

// selectProcessType :: () -> IO ()
export const selectProcessType = pipeK(
	() => selectIndex('#tramiteGrupo\\[0\\]', 19), // select Huella y renovación
	_clickAcceptButton
);

// enterToProcedure :: () -> IO ()
export const enterToProcedure = () => click('#btnEntrar');

// setPersonalInformation :: User -> Stream ()
export const setPersonalInformation = (user) =>
	Monad.do(function*() {
		const sendBtn = yield querySelector('#btnEnviar');
		const countryNationalityInput = yield querySelector('#txtPaisNac');
		const documentNumberInput = yield querySelector('#txtIdCitado');
		const nameInput = yield querySelector('#txtDesCitado');
		const cardExpirationInput = yield querySelector('#txtFecha');
		const countryIndex = getIndexByValue(countryNationalityInput, user.country);

		if (user.isPassport) yield click('#rdbTipoDocPas');

		yield setValue(user.docNumber, documentNumberInput);
		yield setValue(user.name, nameInput);
		yield setValue(user.cardExpiration, cardExpirationInput);
		yield setProperty('selectedIndex', countryIndex, countryNationalityInput);
		yield notifySolveCaptcha(250, sendBtn);

		return IO.of();
	});

// askForAppointment :: () -> IO ()
export const askForAppointment = () => click('#btnEnviar');

export const selectOffice = pipeK(
	() => selectIndex('#idSede', 0), // selecciona oficina
	_clickNextButton
);

export const setContactInformation = (user) =>
	Monad.do(function*() {
		debugger;
		const telInput = yield querySelector('#txtTelefonoCitado');
		const emailInput = yield querySelector('#emailUNO');
		const repeatEmailInput = yield querySelector('#emailDOS');

		yield setValue(user.tel, telInput);
		yield setValue(user.email, emailInput);
		yield setValue(user.email, repeatEmailInput);
		yield _clickNextButton();

		return IO.of();
	});

// verifyAppointment :: () -> IO ()
export const verifyAppointment = () =>
	Monad.do(function*() {
		const NO_APPOINTMENT = 'NO HAY SUFICIENTES CITAS DISPONIBLES';
		const messageArea = yield querySelector('#mensajeInfo > p.mf-msg__info > span > b');
		const submitBtn = yield querySelector('#btnSubmit');
		const msg = messageArea.textContent;
		const action = msg === NO_APPOINTMENT ? click(submitBtn) : speak('Si tienes citas disponibles');
		return IO.of(yield action);
	});
