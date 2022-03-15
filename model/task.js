var oApp = {};

oApp.mongoose = require('mongoose');

oApp.getModel = () => {
	let scheme = oApp.mongoose.Schema({
		title: String,
		description: String
	},{
		timestamps: true,
		versionKey: false
	});

	return oApp.mongoose.model('task', scheme);
}

exports.getModel = oApp.getModel;