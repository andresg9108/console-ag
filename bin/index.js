#!/usr/bin/env node
var oApp = {};

oApp.fs = require('fs');
oApp.commander = require('commander');
oApp.consoleApp = require('../console-app/index.js');
oApp.tasks = require('../tasks/index.js');
oApp.packageJson = JSON.parse(oApp.fs.readFileSync(`./package.json`, 'utf-8'));

try{
	oApp.commander.version(oApp.packageJson.version).description(oApp.packageJson.description);


	oApp.commander
	.action(() => {
		throw(1);
	});


	// Run console app.
	oApp.commander.command('app')
	.description('run console app.')
	.action(() => {
		oApp.consoleApp.start()
	});


	// Task management.
	oApp.commander.command('task <action>')
	.description(`task management.
		action type:
		save: save a task.`)
	.action((action) => {
		switch(action){
			case 'save':
				oApp.tasks.save();
	        	break;
	        default:
	        	throw(1);
	        	break;
	    }
	});


	oApp.commander.parse(process.argv);
}catch(e){
	switch(e){
		case 1:
			console.log(` Error: The instruction is not recognized. Run "console-ag -h" to get help.`);
        	break;
        default:
        	console.log(`Unexpected error.`)
        	console.log(e)
        	break;
    }
}