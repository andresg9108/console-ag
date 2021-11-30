var getPath = () => {
	let sPath = (typeof process.env.CONSOLE_AG !== 'undefined') ? process.env.CONSOLE_AG : '';
	return sPath;
}

var bye = () => {
	console.log('\n See you soon.\n');
}

exports.bye = bye;
exports.getPath = getPath;