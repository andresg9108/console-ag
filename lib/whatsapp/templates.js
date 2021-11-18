var oProcesspy = require('./index.js');

var start = () => {
	console.log('\n ¡Hello World!\n');
	// console.log(process.env.JAVA_HOME);
	console.log(process.env.npm_config_prefix);
	oProcesspy.start();
}

exports.start = start;