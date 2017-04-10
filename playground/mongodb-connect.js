"use strict";
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MondgoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.warn('Unable to insert to do', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Ben Mercer',
        age: 43,
        location: 'Ipswich'
    }, (err, result) => {
        if (err) {
            console.warn('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});