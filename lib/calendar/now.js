var oCalendar = require('./index.js');

var start = () => {
	let oNow= new Date();
	console.log(`\n Date: ${oNow}\n`);
	console.log(`\n UNIX time: ${oNow.getTime()}\n`);
	oCalendar.start();
}

exports.start = start;