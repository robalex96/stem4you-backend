const express = require('express');
const { readTable, readItem, createItem, deleteItem } = require('../../dynamoDB/dynamoDB');

const activities = express.Router()

activities.get('/', (req, res) => {
    readTable('activities')
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

activities.get('/:activity', (req, res) => {
    readItem('activities', req.params)
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

activities.delete('/:activity', (req, res) => {
    deleteItem('activities', req.params)
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

module.exports = activities