const express = require('express');
const sobreRouter = require('./Servidor-Teste/sobre');
const servicosRouter = require('./Servidor-Teste/servicos');
const produtosRouter = require('./Servidor-Teste/produtos');

const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack);
    req.status(500).send('Falha no carregamento');
});

app.get ('/', (req, res) => {
    res.send('Acesso ao servidor');
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});