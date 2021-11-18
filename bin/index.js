#!/usr/bin/env node

try{
	var oMain = require('../lib/index.js');
	oMain.start();
}catch(e){
	console.log(` Error:\n ${e}`);
}