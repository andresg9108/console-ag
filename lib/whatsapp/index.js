var oInquirer = require('inquirer');
var oMain = require('../index.js');
var oSend = require('./send.js');
var oTemplates = require('./templates.js');

var start = () => {
	oInquirer.prompt([
	{
		type: 'list',
		name: 'option',
		message: 'Choose an option\n',
		choices: [{
			name: 'Send',
			value: '1'
		},{
			name: 'Templates',
			value: '2'
		},{
			name: 'Back',
			value: 'back'
		},{
			name: 'Exit',
			value: 'exit'
		}]
	}
	])
	.then(oAnswers => {
		switch (oAnswers.option) {
			case '1':
				oSend.start();
				break;
			case '2':
				oTemplates.start();
				break;
			case 'back':
				oMain.start();
				break;
			case 'exit':
        		console.log('\n See you soon.\n');
        		break;
			default:
				start();
				break;
		}
	});
}

exports.start = start;