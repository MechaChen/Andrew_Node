const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bold.inverse('Error!'));

const command = process.argv[2];

if (command === 'add') { 
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Remove note!');
}