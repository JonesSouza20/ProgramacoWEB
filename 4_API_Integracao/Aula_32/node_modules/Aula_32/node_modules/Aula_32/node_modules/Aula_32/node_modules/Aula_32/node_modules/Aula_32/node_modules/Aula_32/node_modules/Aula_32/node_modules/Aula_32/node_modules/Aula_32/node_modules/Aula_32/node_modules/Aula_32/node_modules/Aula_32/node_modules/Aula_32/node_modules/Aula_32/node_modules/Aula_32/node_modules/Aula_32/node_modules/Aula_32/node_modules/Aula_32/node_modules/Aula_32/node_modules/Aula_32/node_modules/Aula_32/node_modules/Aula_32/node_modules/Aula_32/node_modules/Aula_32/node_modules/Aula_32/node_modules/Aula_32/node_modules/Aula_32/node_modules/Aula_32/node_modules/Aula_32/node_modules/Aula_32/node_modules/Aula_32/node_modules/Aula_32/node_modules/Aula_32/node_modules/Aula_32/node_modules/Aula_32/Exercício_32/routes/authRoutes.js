const express = require('express');
const { registarUsuario, loginUsuario } = require('../controllers/authController');
const router = express.Router();

router.post('/registar', registarUsuario);

counter.post('/login', loginUsuario);

module.exports = router;