const path = require('path');
const Copy = require('copy-webpack-plugin');

module.exports = {
	watch: process.env.NODE_ENV === 'dev',
	mode: 'production',
	entry: {
		popup: './chrome/popup.js',
		content: './chrome/content.js'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js'
	},
	plugins: [
		new Copy([
			{ from: `./chrome/icons/logo.png`, to: 'icons' },
			{ from: './chrome/manifest.json', to: 'manifest.json' },
			{ from: './chrome/popup.html', to: 'popup.html' },
			{ from: `./chrome/audio/solve-captcha.mp3`, to: 'audio' },
			{ from: `./chrome/audio/have-appointment.mp3`, to: 'audio' }
		])
	],
	optimization: {
		minimize: !process.env.NODE_ENV === 'dev'
	}
};
