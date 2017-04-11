"use strict";
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MondgoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('58ecae6614dcee1bf67f7f53')
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('58eb9e31b9d14c7fa7a3c589')
        },
        {
            $set: {
                name: 'Luke Smells!'
            },
            $inc: {
                age: +1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    // db.close();
});