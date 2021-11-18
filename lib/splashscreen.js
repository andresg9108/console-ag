var oChalk = require('chalk');
var oFiglet = require('figlet');

var start = () => {
	console.log(
		oChalk.green(oFiglet.textSync('My Console', {
			font: 'Bubble',
			horizontalLayout: 'default',
			verticalLayout: 'default'
		})));
	console.log('\n');
}

exports.start = start;