var oFs = require("fs");

var getPath = () => {
	let sPath = (typeof process.env.CONSOLE_AG !== 'undefined') ? process.env.CONSOLE_AG : '';
	let sLastChar = sPath.charAt(sPath.length-1);
	sPath += (sLastChar != '/') ? '/' : '';
	
	return sPath;
}

var pathExists = () => {
	let sPath = getPath();

	if(!oFs.existsSync(sPath)){
		console.log('\n Warning: Environment variable not found (CONSOLE_AG) or directory does not exist.\n');
		return false;
	}

	return true;
}

var bye = () => {
	console.log('\n See you soon.\n');
}

exports.getPath = getPath;
exports.pathExists = pathExists;
exports.bye = bye;