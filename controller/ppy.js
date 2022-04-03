var oApp = {};

require('shelljs/global');
oApp.inquirer = require('inquirer');
oApp.useful = require('../lib/useful.js');

oApp.cal = () => {
	oApp.inquirer.prompt([
		{
			type: 'input',
			name: 'date',
			message: 'Date'
		}
	])
	.then(answers => {
		let sPath = oApp.useful.getPath();
		sPath = `${sPath}/processpy/process.py`;
		exec(`python ${sPath} -cal ${answers.date}`);
	});
}

oApp.rts = () => {
	oApp.inquirer.prompt([
		{
			type: 'input',
			name: 'folder',
			message: 'Folder'
		},{
			type: 'input',
			name: 'search',
			message: 'Search'
		},{
			type: 'input',
			name: 'replace',
			message: 'Replace'
		}
	])
	.then(answers => {
		let sPath = oApp.useful.getPath();
		sPath = `${sPath}/processpy/process.py`;
		exec(`python ${sPath} -rts ${answers.folder} ${answers.search} ${answers.replace}`);
	});
}

oApp.sql = () => {
	oApp.inquirer.prompt([
		{
			type: 'input',
			name: 'file',
			message: 'File'
		},{
			type: 'input',
			name: 'path',
			message: 'SQL files path'
		}
	])
	.then(answers => {
		let sPath = oApp.useful.getPath();
		sPath = `${sPath}/processpy/process.py`;
		exec(`python ${sPath} -sql ${answers.file} ${answers.path}`);
	});
}

oApp.html = () => {
	let sPath = oApp.useful.getPath();
	sPath = `${sPath}/processpy/process.py`;
	exec(`python ${sPath} -html`);
}

exports.cal = oApp.cal;
exports.rts = oApp.rts;
exports.sql = oApp.sql;
exports.html = oApp.html;