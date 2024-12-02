const express = require('express');
const usuariosRouter = require('./rotas/usuarios'); // Certifique-se que "rotas/usuario.js" existe

const app = express();

// Rota básica
app.get('/', (req, res) => {
  res.send('Olá, bem-vindo ao servidor Express!');
});

app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next(); // Passa para a próxima função ou rota
});


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

let usuarios = [ { nome: "João", email: "joao@gmail.com" }];

// Rota para adicionar um usuário
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  usuarios.push({ nome, email });
  res.status(201).send('Usuário cadastrado com sucesso');
});

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});