var oApp = {};

oApp.inquirer = require('inquirer');
oApp.useful = require('../lib/useful.js');
oApp.db = require('../lib/db.js');

oApp.taskModel = require('../model/task.js');
oApp.model = oApp.taskModel.getModel();

oApp.search = () => {
  oApp.inquirer.prompt([
    {
      type: 'input',
      name: 'search',
      message: 'Task search'
    }
  ])
  .then(answers => {
    let search = new RegExp(answers.search, 'i');

    oApp.model.find({
      $or: [{title: search}, {description: search}]
    }).lean().then((response) => {
      oApp.db.close();
      oApp.setTable(response);
      process.exit(0); // Para que node no se quede pensando si hay algo en ejecución.
    });
  });
}

oApp.list = () => {
  oApp.model.find().lean().then((response) => {
    oApp.db.close();
    oApp.setTable(response);
    process.exit(0); // Para que node no se quede pensando si hay algo en ejecución.
  });
}

oApp.setTable = (response) => {
  if(response.length == 0){
    console.log('No tasks fond.');
  }else{
    if(response.length == 1){
      response = {
        _id: response[0]._id.toString(),
        title: response[0].title,
        description: response[0].description
      };
    }else{
      response = response.map(data => ({
        _id: data._id.toString(),
        title: data.title,
        description: data.description
      }));
    }

    console.table(response);
  }
}

oApp.update = () => {
  oApp.inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Task ID'
    },
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
    // Validación de ID.
    oApp.model.findById(answers.id)
    .count((err, count) => {

      if(typeof count != 'undefined' && count > 0){

        // Update.
        oApp.model.updateOne({
          _id: answers.id
        },{
          title: answers.title,
          description: answers.description
        }).then(() => {
          oApp.db.close();
          console.log('Task updated.');
          
        });
        // Otra forma de hacer el update.
        /*oApp.model.findByIdAndUpdate(answers.id, {
          title: answers.title,
          description: answers.description
        }).then(() => {
          oApp.db.close();
          console.log('Task updated.');
        });*/

      }else{
        oApp.db.close();
        console.log(`There is no record with the id ${answers.id}.`);
      }

    });
  });
}

oApp.delete = () => {
  oApp.inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Task ID'
    }
  ])
  .then(answers => {
    // Validación de ID.
    oApp.model.findById(answers.id)
    .count((err, count) => {

      if(typeof count != 'undefined' && count > 0){

        // Delete.
        oApp.model.findByIdAndDelete(answers.id).then(() => {
          oApp.db.close();
          console.log('Task deleted.');
        });

      }else{
        oApp.db.close();
        console.log(`There is no record with the id ${answers.id}.`);
      }

    });
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

exports.search = oApp.search;
exports.delete = oApp.delete;
exports.list = oApp.list;
exports.create = oApp.create;
exports.update = oApp.update;