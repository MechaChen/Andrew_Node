const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bold.inverse('Error!'));

// [CMD] node app.js Benson
console.log(process.argv);
// ->
// [
//   '/usr/local/bin/node', -> Path to Node.js
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js', -> Path to the File
//   'Benson' -> Argument
// ]
