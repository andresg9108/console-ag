var oApp = {};

oApp.mongoose = require('mongoose');

oApp.connect = () => {
	oApp.mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/console-ag-tasks');

	oApp.mongoose.connection.on('error', (e) => {
	});

	oApp.mongoose.connection.once('open', () => {
	});
}

oApp.close = () => {
	oApp.mongoose.connection.close();
}

exports.connect = oApp.connect;
exports.close = oApp.close;