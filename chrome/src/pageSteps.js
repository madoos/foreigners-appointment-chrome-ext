export const selectCity = () => {
	document.querySelector('#form').selectedIndex = 33; // select madrid
	document.querySelector('#btnAceptar').click(); // click aceptar
};

export const selectProcessType = () => {
	document.querySelector('#tramiteGrupo\\[0\\]').selectedIndex = 19; // select procedure
	document.querySelector('#btnAceptar').click(); // click acept
};

export const enterToProcedure = () => {
	document.querySelector('#btnEntrar').click(); // enter
};

export const setPersonalInformation = () => {
	document.querySelector('#txtIdCitado').value = user.NIE; // set NIE
	document.querySelector('#txtDesCitado').value = user.name; // set name
	document.querySelector('#txtPaisNac').selectedIndex = user.countryCode; // select country
	document.querySelector('#txtFecha').value = user.cardExpiration;
	const sendBtn = document.querySelector('#btnEnviar');

	try {
		document.querySelector('#recaptcha-anchor > div.recaptcha-checkbox-border'); // click captcha
	} catch (e) {}

	const id = setInterval(() => {
		if (sendBtn.disabled) {
			speak('Resolver captcha');
		} else {
			clearInterval(id);
			sendBtn.click();
			// setNextStep(5);
		}
	}, 200);
};

export const askForAppointment = () => {
	document.querySelector('#btnEnviar').click(); // solicitar cita
	// setNextStep(6);
};

export const selectOffice = () => {
	document.querySelector('#idSede').selectedIndex = 0; // selecciona oficina
	document.querySelector('#btnSiguiente').click(); // next
	// setNextStep(7);
};

export const setContactInformation = () => {
	// set info
	document.querySelector('#txtTelefonoCitado').value = user.tel;
	document.querySelector('#emailUNO').value = user.email;
	document.querySelector('#emailDOS').value = user.email;
	document.querySelector('#btnSiguiente').click();
};

export const verifyAppointment = () => {
	const msg = document.querySelector('#mensajeInfo > p.mf-msg__info > span > b').textContent;
	//speak(msg);

	if (msg === 'NO HAY SUFICIENTES CITAS DISPONIBLES') {
		document.querySelector('#btnSubmit').click();
	} else {
		speak('Parece que tienes cita disponible');
	}
};

export const steps = {
	1: selectCity,
	2: selectProcessType,
	3: enterToProcedure,
	4: setPersonalInformation,
	5: askForAppointment,
	6: selectOffice,
	7: setContactInformation,
	8: verifyAppointment
};
