const express = require('express');
const autenticarToken = require('../middlewares/authMiddleware');
const { usuarios } = require('../models/usuariosModel');
const router = express.Router();

// Rota protegida - Listar usuários
router.get('/', autenticarToken, (req, res) => {
    res.json(usuarios);
});

module.exports = router;