var oApp = {};

oApp.inquirer = require('inquirer');
oApp.useful = require('../lib/useful.js');

oApp.save = () => {
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
  .then(oAnswers => {
    console.log(oAnswers);
    
  });
}

exports.save = oApp.save;