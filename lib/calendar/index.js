var oInquirer = require('inquirer');
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
        		console.log('\n See you soon.\n');
        		break;
			default:
				start();
				break;
		}
	});
}

exports.start = start;