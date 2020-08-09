const express = require('express');

const admin = express.Router()

admin.get('/', (req, res) => {
    res.send({statusCode: 200, message: 'Wellcome to STEM4you API .'});
});

module.exports = admin