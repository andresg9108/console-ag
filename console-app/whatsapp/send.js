var oApp = {};

oApp.open = require('open');
oApp.inquirer = require('inquirer');
oApp.whatsapp = require('./index.js');

oApp.start = () => {
	oApp.inquirer.prompt([
	{
		name: 'number',
		message: 'WhatsApp number:',
		default: 'None'
	},{
		name: 'message',
		message: 'Message:',
		default: 'None'
	}
	])
	.then(oAnswers => {
		oAnswers.message = encodeURIComponent(oAnswers.message);
		oApp.open(`https://api.whatsapp.com/send?phone=${oAnswers.number}&text=${oAnswers.message}`);
		console.log('\n Sending message.\n');
		oApp.whatsapp.start();
	});
}

exports.start = oApp.start;