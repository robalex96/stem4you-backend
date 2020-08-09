const admin = require('./components/admin');
const users = require('./components/users');

const routes = function (server) {
    server.use('/admin', admin);
    server.use('/users', users);
}

module.exports = routes
