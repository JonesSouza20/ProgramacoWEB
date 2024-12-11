const express = require('express');
const logRequests = require('./middlewares/logRequests');
const errorHandler = require('./middlewares/errorHandler');
const authenticate = require('./middlewares/authenticate');
const { routeStats, contador } = require('./middlewares/contador');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(logRequests);
app.use(authenticate);
app.use(contador);

app.get('/', (req, res) => {
    res.send({message: 'Olá Mundo'})
});

app.get('/error', (req, res) => {
    throw new Error('Teste de erro')
});

app.get('/stats', (req, res) => {
    res.json(routeStats);
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
});