const db = require('../config/Databases');

const contactos = db.Conn.define('contactos', {
    nome: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.STRING
    }
});

module.exports = contactos;

/*contactos.sync({
    force: true
});*/