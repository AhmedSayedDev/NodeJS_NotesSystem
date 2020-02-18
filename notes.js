const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return '....';
}
const removeNote = function (title) {
    const notes = loadNotes()
    const updatedList = notes.filter((note) => note.title !== title)
    if(notes.length > updatedList.length){
        console.log(chalk.green.inverse('note Removed :)'))
    }else{
        console.log(chalk.red.inverse('no notes with this title! :)'))
    }
    saveNotes(updatedList)
}
const addNote =  (title, body) => {
    const notes = loadNotes()
    const dublicates = notes.filter((note) => note.title === title )
    
    if(dublicates.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note Added :)'))
    }else{
        console.log(chalk.red.inverse('this note is already added before!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes..'))
    notes.forEach((note) => {
        console.log(' -'+note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('No Notes with this title..'))
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}