const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes');

console.log(process.argv);
console.log(yargs.argv);

// [CMD] node app.js --help
// ->
// [
//   '/usr/local/bin/node',
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js',
//   '--help'
// ]
// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number  


// [CMD] node app.js --version
// ->
// [
//   '/usr/local/bin/node',
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js',
//   '--version'
// ]
// 1.0.0