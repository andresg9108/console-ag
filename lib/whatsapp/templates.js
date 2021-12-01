var oFs = require("fs");
var oOpen = require('open');
var oInquirer = require('inquirer');
var oHandlebars = require('handlebars');
var oUseful = require('../useful.js');
var oWhatsapp = require('./index.js');

var g_sWhatsappTemplatesPath = 'whatsapp/templates/';

var start = () => {
	if(oUseful.pathExists()){
		let oSettings = getWhatsappSettings();
		let sPath = oUseful.getPath();
		let sTemplatesPath = `${sPath}${g_sWhatsappTemplatesPath}templates/`;

		oInquirer.prompt(oSettings.main)
		.then(oAnswersM => {
			oInquirer.prompt(oSettings.options[oAnswersM.option].prompt)
			.then(oAnswers => {
				let sResponse = '';
				let sNumber = oSettings.options[oAnswersM.option].number;
				let sTemplate = oSettings.options[oAnswersM.option].template;
				sTemplate = `${sTemplatesPath}${sTemplate}`;

				oAnswers = getTheAnswersReview(oAnswers);

				let sTemplateHbs = getTemplate(sTemplatesPath, sTemplate);
				let oTemplate = oHandlebars.compile(sTemplateHbs);
				sResponse = oTemplate(oAnswers);

				sResponse = encodeURIComponent(sResponse);
				oOpen(`https://api.whatsapp.com/send?phone=${sNumber}&text=${sResponse}`);
				console.log('\n Sending message.\n');
				oWhatsapp.start();
			});
		});
	}
}

var getTheAnswersReview = (oAnswers) => {
	for(var sKey in oAnswers){
		if(sKey == 'day-ag'){
			oAnswers[sKey] = getDayAG(oAnswers[sKey]);
		}
	}

	return oAnswers;
}

var getDayAG = (sDay) => {
	let oDate = new Date();
	let sResponse = '';

	if(sDay == 'today'){
		sResponse = `${oDate.getDate()}-${(oDate.getMonth()+1)}-${oDate.getFullYear()}`;
	}else if(sDay == 'tomorrow'){
		oDate.setTime(oDate.getTime()+(1*24*60*60*1000));
		sResponse = `${oDate.getDate()}-${(oDate.getMonth()+1)}-${oDate.getFullYear()}`;
	}

	return sResponse;
}

var getTemplate = (sTemplatesPath, sTemplate) => {
	let sResponse = 'Hello';

	if(!oFs.existsSync(sTemplatesPath)){
		oFs.mkdirSync(sTemplatesPath, {recursive:true});
	}

	if(!oFs.existsSync(sTemplate)){
		oFs.writeFile(sTemplate, 'Hello', (err) => {
			if (err) throw err;
		});
	}else{
		sResponse = oFs.readFileSync(sTemplate, 'UTF-8');
	}

	return sResponse;
}

var getWhatsappSettings = () => {
	let sPath = oUseful.getPath();
	let sWhatsappTemplatesPath = sPath + g_sWhatsappTemplatesPath;
	let sFile = 'settings.json';
	let oResponse = {};

	if(!oFs.existsSync(sWhatsappTemplatesPath)){
		oFs.mkdirSync(sWhatsappTemplatesPath, {recursive:true});
	}

	if(!oFs.existsSync(sWhatsappTemplatesPath + sFile)){
		oFs.writeFile(sWhatsappTemplatesPath + sFile, '{}', (err) => {
			if (err) throw err;
		});
	}else{
		oResponse = JSON.parse(oFs.readFileSync(sWhatsappTemplatesPath + sFile, 'UTF-8'));
	}

	return oResponse;
}

exports.start = start;