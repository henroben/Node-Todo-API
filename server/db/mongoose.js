"use strict";

let mongoose = require('mongoose');
let mongoConfig = require('./../config/config');

mongoose.Promise = global.Promise; // set mongoose to use promises
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: `mongodb://${mongoConfig.username}:${mongoConfig.password}@ds159880.mlab.com:59880/todos-app`
};
mongoose.connect(db.localhost || db.mlab); // connect to mongo database

module.exports = {mongoose};