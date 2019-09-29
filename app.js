const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes');

// Change the version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  description: 'Add a note',
  handler: function() {
    console.log('Adding a new note');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

console.log(yargs.argv);