var oApp = {};

oApp.calendar = require('./index.js');

oApp.start = () => {
	let oNow= new Date();
	console.log(`\n Date: ${oNow}\n`);
	console.log(`\n UNIX time: ${oNow.getTime()}\n`);
	oApp.calendar.start();
}

exports.start = oApp.start;