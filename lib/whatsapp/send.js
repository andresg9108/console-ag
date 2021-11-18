var oOpen = require('open');
var oInquirer = require('inquirer');
var oProcesspy = require('./index.js');

var start = () => {
	oInquirer.prompt([
	{
		name: 'number',
		message: 'WhatsApp number:',
		default: 'None'
	},{
		type: 'editor',
		name: 'message',
		message: 'Message:'
	}
	])
	.then(oAnswers => {
		oAnswers.message = encodeURIComponent(oAnswers.message);
		oOpen(`https://api.whatsapp.com/send?phone=${oAnswers.number}&text=${oAnswers.message}`);
		console.log('\n Sending message.\n');
		oProcesspy.start();
	});
}

exports.start = start;