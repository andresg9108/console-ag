var oApp = {};

oApp.inquirer = require('inquirer');
oApp.useful = require('../lib/useful.js');
oApp.db = require('../lib/db.js');

oApp.taskModel = require('../model/task.js');
oApp.model = oApp.taskModel.getModel();

oApp.delete = () => {
  oApp.inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Task ID'
    }
  ])
  .then(answers => {
    oApp.model.findByIdAndDelete(answers.id).then(() => {
      oApp.db.close();
      console.log('Task deleted.');
    });
  });
}

oApp.list = () => {
  oApp.model.find().lean().then((response) => {
    oApp.db.close();

    response = response.map(data => ({
      title: data.title,
      description: data.description,
      _id: data._id.toString()
    }))
    console.table(response);

    process.exit(0); // Para que node no se quede pensando si hay algo en ejecución.
  });
}

oApp.create = () => {
  oApp.inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Task title'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Task description'
    }
  ])
  .then(answers => {
    oApp.model.create(answers).then(() => {
      oApp.db.close();
      console.log('Task created.');
    });
  });
}

exports.delete = oApp.delete;
exports.list = oApp.list;
exports.create = oApp.create;