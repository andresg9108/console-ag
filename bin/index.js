#!/usr/bin/env node
var oSplashscreen = require('../lib/splashscreen.js');
var oMain = require('../lib/index.js');

try{
	oSplashscreen.start();
	oMain.start();
}catch(e){
	console.log(` Error:\n ${e}`);
}