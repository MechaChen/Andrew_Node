const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes...';
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    } else {
        console.log(chalk.bgRed('Note title taken!'));
    }
}

function removeNote(title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(note) {
        if(note.title === title) {
            foundNote = true;
        }
        return note.title !== title;
    });

    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgRed('No Note founded!'));
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
  
  
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};