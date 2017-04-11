"use strict";
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MondgoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Users').deleteMany({
    //     name: "Ben Mercer"
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndDelete({
        _id: ObjectID("58ecb1b014dcee1bf67f7f57")
    }).then((result) => {
        console.log('Deleted:', result);
    }, (err) => {
        console.log('Error: ', err);
    });

    // db.close();
});