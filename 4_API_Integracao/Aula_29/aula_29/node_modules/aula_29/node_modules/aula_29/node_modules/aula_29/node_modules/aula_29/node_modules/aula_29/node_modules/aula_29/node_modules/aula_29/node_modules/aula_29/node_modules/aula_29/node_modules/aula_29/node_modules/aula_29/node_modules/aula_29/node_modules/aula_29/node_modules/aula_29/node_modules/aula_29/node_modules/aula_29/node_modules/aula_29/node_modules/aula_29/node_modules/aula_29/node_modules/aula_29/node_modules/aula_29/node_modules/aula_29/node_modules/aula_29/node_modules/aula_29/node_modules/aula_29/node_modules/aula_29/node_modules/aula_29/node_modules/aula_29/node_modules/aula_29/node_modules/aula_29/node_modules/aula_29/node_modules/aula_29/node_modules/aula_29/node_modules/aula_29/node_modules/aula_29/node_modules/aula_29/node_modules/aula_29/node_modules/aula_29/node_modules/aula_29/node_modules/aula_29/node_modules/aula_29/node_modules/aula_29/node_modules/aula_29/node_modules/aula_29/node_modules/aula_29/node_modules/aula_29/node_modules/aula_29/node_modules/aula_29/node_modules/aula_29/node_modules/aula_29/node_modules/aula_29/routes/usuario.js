const express = require('express');
const router = express.Router();
const usuarios = require('../data/usuario.json')

router.post('/', (req, res) => {
    const {nome, email} = req.body;

    if (!nome || !email) {
        return res.status(400).json({error:'Nome e Email são obrigatórios'})
    }

    const novoUsuario = {id:Date.now(), nome, email};

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)
})

router.get('/', (req, res) => {
    res.json(usuarios)
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body;
    const usuario = usuarios.find(u => u.id === parseInt(id));
  
    if (!usuario) {
        return res.status(400).json({error:'Usuario não localizado'})
    };

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.json(usuario);
})

router.delete('/', (req, res) => {
    const {id} = req.params;
    const index = usuarios.find(u => u.id === parseInt(id));

    if (index === -1) {
        return res.status(400).json({error:'Usuario não localizado'})
    }
    usuarios.splice(index, 1);

    res.status(200).send();
});

module.exports = router;