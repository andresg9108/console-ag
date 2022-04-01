var oApp = {};

require('shelljs/global');
oApp.useful = require('../lib/useful.js');

oApp.html = () => {
	let sPath = oApp.useful.getPath();
	sPath = `${sPath}/processpy/process.py`;
	exec(`python ${sPath} -html`);
}

exports.html = oApp.html;