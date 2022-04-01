var oApp = {};

oApp.fs = require('fs');

oApp.getPath = () => {
	let sPath = '';

	sPath = `${process.env.APPDATA}/npm/node_modules`;
	if(oApp.fs.existsSync(sPath)){ return sPath; }

	sPath = `/usr/local/lib/node`;
	if(oApp.fs.existsSync(sPath)){ return sPath; }

	sPath = `/usr/local/lib/node_modules`;
	return sPath;
}

oApp.bye = () => {
	console.log('\n See you soon.\n');
}

exports.getPath = oApp.getPath;
exports.bye = oApp.bye;