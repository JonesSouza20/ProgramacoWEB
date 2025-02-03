const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/authController'); // Verifique se esse import está correto!

router.post('/register', registrarUsuario); // A função precisa estar definida corretamente!

module.exports = router;