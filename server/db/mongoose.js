"use strict";

let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp'); // connect to mongo database

module.exports = {mongoose};