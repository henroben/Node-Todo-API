"use strict";

let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp'); // connect to mongo database

// create Todo model
// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });
//
// let newTodo = new Todo({
//     text: 'New test',
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved', doc);
// }, (e) => {
//     console.log('Unable to save');
// });

// create User model
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let newUser = new User({
    email: 'ben@henroben.co.uk'
});

newUser.save().then((doc) => {
    console.log('Saved', doc);
}, (e) => {
    console.log('Unable to save', e);
});