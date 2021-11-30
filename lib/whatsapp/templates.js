var oFs = require("fs");
var oUseful = require('../useful.js');
var oWhatsapp = require('./index.js');

var start = () => {
	let sPath = oUseful.getPath();

	if (!oFs.existsSync(sPath)){
		console.log('\n Warning: Environment variable not found (CONSOLE_AG) or directory does not exist.\n');
	}else{
		console.log('\n ¡Hello World!\n');
	}

	oWhatsapp.start();
}

exports.start = start;