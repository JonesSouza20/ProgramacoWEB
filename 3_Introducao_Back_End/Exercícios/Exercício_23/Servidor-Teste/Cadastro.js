const express = require('express');


app.use(express.json());

let produtos = [];

app.post('/produtos', (req, res) => {
    const {nome, preco} = req.body;
    produtos.push({nome, preco});
    res.status(201).send('Produto cadastrado com sucesso!');
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});