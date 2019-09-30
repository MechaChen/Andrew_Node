const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

// 
// Goal: Wire up list command
// 
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call list notes from command handler
// 3. Test your work!


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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

// Create list command
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler() {
        notes.listNotes();
    },
});

// Create read command
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler() {
        console.log('Reading a note');
    },
});


// console.log(yargs.argv);
yargs.parse();