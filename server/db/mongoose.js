"use strict";

let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set mongoose to use promises
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://todo-app-user:todo-app-user@ds159880.mlab.com:59880/todos-app'
};
mongoose.connect(db.mlab); // connect to mongo database

module.exports = {mongoose};