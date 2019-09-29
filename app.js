const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

// 
// Challenge: Wire up removeNote
// 
// 1. Load existing Notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doens't exist


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
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
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