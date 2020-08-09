const express = require('express');
const { readTable, readItem, createItem, deleteItem } = require('../../dynamoDB/dynamoDB');

const users = express.Router()

users.get('/', (req, res) => {
    readTable('users')
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

users.get('/:id', (req, res) => {
    readItem('users', req.params.id)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

users.post('/', (req, res) => {
    createItem('users', req.body)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

users.put('/', (req, res) => {
    createItem('users', req.body)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

users.delete('/:id', (req, res) => {
    deleteItem('users', req.params.id)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

module.exports = users