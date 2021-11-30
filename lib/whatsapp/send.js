var oOpen = require('open');
var oInquirer = require('inquirer');
var oWhatsapp = require('./index.js');

var start = () => {
	oInquirer.prompt([
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
		oOpen(`https://api.whatsapp.com/send?phone=${oAnswers.number}&text=${oAnswers.message}`);
		console.log('\n Sending message.\n');
		oWhatsapp.start();
	});
}

exports.start = start;