const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const routes = require('./routes');

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('src/App/views', {
    express: server,
    noCache: true,
    autoescape: false
});

server.listen(3333, () => {
    console.log("Running...");
});