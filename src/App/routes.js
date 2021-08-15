const express = require('express');
const routes = express.Router();

const contactos = require('./model/Contactos');

routes.get('/', (req, res) => {
    contactos.findAll().then((dados) => {
        res.render('home', {
            dados
        });
    })
});

routes.post('/cad', (req, res) => {
    const {
        nome,
        numero,
        email,
        descricao
    } = req.body;
    contactos.create({
        nome,
        numero,
        email,
        descricao,
    }).then(() => {
        res.redirect('/sucessMessage');
    }).catch((err) => {
        res.redirect('/errorMessage');
    });
});

routes.get('/findone/:id', (req, res) => {
    const id = req.params.id;

    contactos.findOne({
        where: {
            id
        }
    }).then((dados)=>{
        res.send({dados})
    })

});

routes.get('/update/:id', (req, res) => {
    const id = req.params.id;

});

routes.get('/destroy/:id', (req, res) => {
    const {
        id
    } = req.params;

    contactos.destroy({
        where: {
            id
        }
    }).then(() => {
        res.redirect('/sucessMessage');
    }).catch(() => {
        res.redirect('/errorMessage');
    })
});

routes.get('/sucessMessage', (req, res) => {
    res.render('alerts/sucessMessage');
});

routes.get('/errorMessage', (req, res) => {
    res.render('alerts/errorMessage');
});

module.exports = routes;