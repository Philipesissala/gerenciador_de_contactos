const Sequelize = require('sequelize');
const Conn = new Sequelize('agendaApp', 'root', 'S1ssala23', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize,
    Conn
}