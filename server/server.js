"use strict";

let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp'); // connect to mongo database

// create Todo model
let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Cook dinner',
    completed: true,
    completedAt: Date.now()
});

newTodo.save().then((doc) => {
    console.log('Saved', doc);
}, (e) => {
    console.log('Unable to save');
});