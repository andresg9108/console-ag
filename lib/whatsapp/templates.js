var oWhatsapp = require('./index.js');

var start = () => {
	console.log('\n ¡Hello World!\n');
	console.log(`\n JAVA_HOME: ${process.env.JAVA_HOME}\n`);
	oWhatsapp.start();
}

exports.start = start;