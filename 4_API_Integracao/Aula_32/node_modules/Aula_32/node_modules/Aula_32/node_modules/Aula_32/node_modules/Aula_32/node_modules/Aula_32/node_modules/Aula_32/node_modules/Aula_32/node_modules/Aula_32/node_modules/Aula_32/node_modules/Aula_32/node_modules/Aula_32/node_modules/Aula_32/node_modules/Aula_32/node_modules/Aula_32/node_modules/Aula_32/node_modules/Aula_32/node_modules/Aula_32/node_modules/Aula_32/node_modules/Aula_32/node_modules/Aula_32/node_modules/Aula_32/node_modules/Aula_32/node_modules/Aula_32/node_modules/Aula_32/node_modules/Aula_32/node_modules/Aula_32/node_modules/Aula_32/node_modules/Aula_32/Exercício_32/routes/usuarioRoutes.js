const express = require('express');
const autenticarToken = require('../middlewares/autenticarToken');
const { usuarios } = require('../models/usuarioModel');
const router = express.Router();


router.get('/', autenticarToken, (req, res) => {
    res.json(usuarios);
});

module.exports = router;