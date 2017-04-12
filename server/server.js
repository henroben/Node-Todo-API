"use strict";

let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

// Set port for heroku || local
const port = process.env.PORT || 3000;

// Configure middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// Start listening on port and print message
let serverMsg = [
    `Who's on port ${port}, Roz?`,
    `I've been to port ${port} and back so often I've got frequent flyer miles!`,
    `I'm listening, port ${port}`,
    `We'll be right back after these messages on port ${port}`,
    `You're not getting older, you're getting closer to death on port ${port}`
];

let randomMsg = Math.round(Math.random() * (serverMsg.length - 1 - 0) + 0);

app.listen(port, () => {
    console.log(serverMsg[randomMsg]);
});