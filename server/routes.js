const admin = require('./components/admin');
const users = require('./components/users');
const activities = require('./components/activities');

const routes = function (server) {
    server.use('/admin', admin);
    server.use('/users', users);
    server.use('/activities', activities);
}

module.exports = routes
