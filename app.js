const fs = require('fs')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
yargs.version('1.1.0')

//Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'the note content',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove a note Command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder:{
        title: {
            describe: 'the title of note u want to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//List the notes Command
yargs.command({
    command: 'list',
    describe: 'list the Notes',
    handler(){
        notes.listNotes()
    }
})

//Read a Note Command
yargs.command({
    command: 'read',
    describe: 'read a Note',
    builder:{
        title: {
            describe: 'the title of note u want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

