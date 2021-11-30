var oInquirer = require('inquirer');
var oUseful = require('../useful.js');
var oMain = require('../index.js');
var oNow = require('./now.js');

var start = () => {
	oInquirer.prompt([
	{
		type: 'list',
		name: 'option',
		message: 'Choose an option\n',
		choices: [{
			name: 'Now',
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
				oNow.start();
				break;
			case 'back':
				oMain.start();
				break;
			case 'exit':
        		oUseful.bye();
        		break;
			default:
				start();
				break;
		}
	});
}

exports.start = start;