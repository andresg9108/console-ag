var oApp = {};

oApp.chalk = require('chalk');
oApp.figlet = require('figlet');

oApp.start = () => {
	console.log(
		oApp.chalk.green(oApp.figlet.textSync('My Console', {
			font: 'Bubble',
			horizontalLayout: 'default',
			verticalLayout: 'default'
		})));
	console.log('\n');
}

exports.start = oApp.start;