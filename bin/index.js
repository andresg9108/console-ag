#!/usr/bin/env node
var oMain = require('../modules/index.js');

try{
	const aArgs = process.argv.splice(process.execArgv.length + 2);
	const sCommand = aArgs[0];

	switch (sCommand) {
		case 'start':
			oMain.start();
			break;
		case 'help':
			break;
		default:
			throw(`The instruction "${sCommand}" is not recognized. Run "console-ag help" to get help.`);
			break;
	}

}catch(e){
	console.log(` Error:\n ${e}`);
}