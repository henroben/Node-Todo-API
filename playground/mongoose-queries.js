"use strict";

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '58ee2ff76edd44a3b9d6b4b6';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

let userID = '58ecf0be12cb25389cb41b0c';

if (!ObjectID.isValid(userID)) {
    console.log('User ID not valid');
} else {
    User.findById(userID).then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User:', user);
    }).catch((e) => {
        console.log(e);
    });
}
