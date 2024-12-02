const express = require('express');
const sobre = express.sobre();
const servicos = express.servicos();
const produtos = express.produtos();

app.get('/sobre', (req, res) => {
    res.send('Essa é uma rota /Sobre');
});


app.get('/serviços', (req, res) => {
    res.send('Essa é uma rota /Serviços');
});


app.get('/Produtos', (req, res) => {
    res.send('Essa é  uma rota /Produtos');
})

module.export = {
    sobre,
    servicos,
    produtos
};