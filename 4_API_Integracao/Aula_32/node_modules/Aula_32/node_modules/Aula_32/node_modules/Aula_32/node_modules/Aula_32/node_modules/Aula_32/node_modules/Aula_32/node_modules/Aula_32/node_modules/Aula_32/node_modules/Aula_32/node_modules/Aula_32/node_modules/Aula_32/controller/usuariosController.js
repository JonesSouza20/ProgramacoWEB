const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { usuarios } = require('../models/usuariosModel');
require('dotenv').config();

// Cadastro de Usuário
const registrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    // Verificar se o e-mail já existe
    if (usuarios.find(user => user.email === email)) {
        return res.status(400).json({ error: 'E-mail já cadastrado!' });
    }

    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar usuário
    const novoUsuario = { id: usuarios.length + 1, nome, email, senha: senhaCriptografada };
    usuarios.push(novoUsuario);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
};

// Login do Usuário
const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(user => user.email === email);

    if (!usuario) {
        return res.status(400).json({ error: 'E-mail ou senha inválidos!' });
    }

    // Comparar senhas
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
        return res.status(400).json({ error: 'E-mail ou senha inválidos!' });
    }

    // Gerar Token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login realizado com sucesso!', token });
};

module.exports = { registrarUsuario, loginUsuario };
