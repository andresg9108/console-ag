#!/usr/bin/env node
var oApp = {};

oApp.fs = require('fs');
oApp.commander = require('commander');
oApp.consoleApp = require('../console-app/index.js');
oApp.dotenv = require('dotenv').config();
oApp.db = require('../lib/db.js');
oApp.task = require('../controller/task.js');

oApp.packageJson = JSON.parse(oApp.fs.readFileSync(`./package.json`, 'utf-8'));

try{
	oApp.commander.version(oApp.packageJson.version)
	.description(oApp.packageJson.description);


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
	.alias('t')
	.description(`task management (depends on mongodb).
		action type:
		create|c: create a task.
		update|u: update a task.
		list|l: list the tasks.
		delete|d: delete a task.
		search|s: search.`)
	.action((action) => {
		oApp.db.connect();

		if(action == 'create' || action == 'c'){
			oApp.task.create();
		}else if(action == 'update' || action == 'u'){
			oApp.task.update();
		}else if(action == 'list' || action == 'l'){
			oApp.task.list();
		}else if(action == 'delete' || action == 'd'){
			oApp.task.delete();
		}else if(action == 'search' || action == 's'){
			oApp.task.search();
		}else{
			oApp.db.close();
			throw(1);
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