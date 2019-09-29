const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes');

console.log(process.argv);
console.log(yargs.argv);

// [CMD] node app.js
// ->
// [
//   '/usr/local/bin/node',
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js'
// ]
// { _: [], '$0': 'app.js' }



// [CMD] node app.js add --title="Things to buy"
// ->
// [
//   '/usr/local/bin/node',
//   '/Users/laicailin/Desktop/Andrew/node-course/notes-app/app.js',
//   'add',
//   '--title=Things to buy'
// ]
// { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }