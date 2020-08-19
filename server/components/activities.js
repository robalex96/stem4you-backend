const express = require('express');
const { readTable, readItem, createItem, deleteItem } = require('../../dynamoDB/dynamoDB');

const activities = express.Router()

activities.get('/', (req, res) => {
    readTable('activities')
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

activities.get('/:id', (req, res) => {
    readItem('activities', req.params.id)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

activities.post('/', (req, res) => {
    createItem('activities', req.body)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

activities.put('/', (req, res) => {
    createItem('activities', req.body)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

activities.delete('/:id', (req, res) => {
    deleteItem('activities', req.params.id)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

module.exports = activities