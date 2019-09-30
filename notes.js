const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>  {
    'Your notes...';
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    } else {
        console.log(chalk.bgRed('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgRed('No Note founded!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magentaBright('--- Your Notes ---'));
    notes.forEach((note) => {
        console.log(chalk.black.bgCyan(note.title));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note) {
        console.log(chalk.black.bgGreen(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.bgRed(`The note doesn't exist.`))
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
  
  
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};