var oApp = {};

oApp.inquirer = require('inquirer');
oApp.useful = require('../../lib/useful.js');
oApp.main = require('../index.js');
oApp.send = require('./send.js');

oApp.start = () => {
	oApp.inquirer.prompt([
	{
		type: 'list',
		name: 'option',
		message: 'Choose an option\n',
		choices: [{
			name: 'Send',
			value: '1'
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
				oApp.send.start();
				break;
			case 'back':
				oApp.main.start();
				break;
			case 'exit':
        		oApp.useful.bye();
        		break;
			default:
				start();
				break;
		}
	});
}

exports.start = oApp.start;