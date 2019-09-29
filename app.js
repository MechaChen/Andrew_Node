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
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  },
});

//
// Challenge: Add two new commands
// 
// 1. Setup to support "list" command (print placeholder message for now)
// 2. Setup to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// Create list command
yargs.command({
  command: 'list',
  description: 'List your notes',
  handler: function() {
    console.log('Listing out all notes');
  },
});

yargs.command({
  command: 'read',
  description: 'Read a note',
  handler: function() {
    console.log('Reading a note');
  },
});

console.log(yargs.argv);