const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const usuarioRoutes = require('./routes/usuario');
app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('API Funcionando, acesse /usuarios')
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

