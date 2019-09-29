const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

// 
// Challenge: Setup command option and function
// 
// 1. Setup the remove command to take a require "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"


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