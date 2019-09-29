const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bold.inverse('Error!'));

const command = process.argv[2];

// [CMD] node app.js add --title="This is my title"
console.log(process.argv);
// ->
// [
//   '/usr/local/bin/node',
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js',
//   'add',
//   '--title=This is my title'
// ]

if (command === 'add') { 
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Remove note!');
}