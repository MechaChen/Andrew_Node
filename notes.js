const fs = require('fs');

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

function addNotes(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
  
  
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
};