const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes');

// Change the version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
      console.log('Title: ' + argv.title);
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


// console.log(yargs.argv);
yargs.parse();