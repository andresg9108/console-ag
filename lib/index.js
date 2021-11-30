var oInquirer = require('inquirer');
var oUseful = require('./useful.js');
var oCalendar = require('./calendar/index.js');
var oWhatsapp = require('./whatsapp/index.js');

var start = async () => {
  oInquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Choose an option\n',
      choices: [{
        name: 'Calendar',
        value: '1'
      },{
        name: 'Whatsapp',
        value: '2'
      },{
        name: 'Exit',
        value: 'exit'
      }]
    }
  ])
  .then(oAnswers => {
    switch (oAnswers.option) {
      case '1':
        oCalendar.start();
        break;
      case '2':
        oWhatsapp.start();
        break;
      case 'exit':
        oUseful.bye();
        break;
      default:
        start();
        break;
    }
  });
}

exports.start = start;



/*Test inquirer*/
/*inquirer.prompt([
  {
    name: 'website',
    message: '¿What is your favorite website?',
    default: 'None'
  },{
    type: 'list',
    name: 'color',
    message: '¿What is your favorite color?',
    choices: ['red', 'yellow', 'blue', 'green']
  },{
    type: 'rawlist',
    name: 'car',
    message: '¿What is your favorite car brand.?',
    choices: ['Chevrolet', 'Toyota', 'Nissan', 'Mazda']
  },{
    type: 'expand',
    name: 'brand',
    message: '¿What is your favorite clothing brand?',
    choices: [{
      key: 'a',
      value: 'Adidas'
    },{
      key: 'n',
      value: 'Nike'
    },{
      key: 't',
      value: 'Totto'
    }]
  },{
    type: 'checkbox',
    name: 'colors',
    message: 'Choose various colors',
    choices: ['red', 'yellow', 'blue', 'green']
  },{
    type: 'password',
    name: 'pass',
    message: 'Please enter a password:',
    mask: '*'
  }
  //{
    //type: 'editor',
    //name: 'code',
    //message: 'Send your lines of code.'
  //}
])
.then(answers => {
  console.log('Answer: ', answers);
});*/