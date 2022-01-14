#!/usr/bin/env node
var oSplashscreen = require('../modules/splashscreen.js');
var oMain = require('../modules/index.js');

try{
	oSplashscreen.start();
	oMain.start();
}catch(e){
	console.log(` Error:\n ${e}`);
}