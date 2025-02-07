const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { usuarios } = require('../models/usuarioModel');
require('dotenv').config();

const registroUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (usuarios.find(user => user.email === email)) {
        return res.status(400).json({ error: 'Email já cadastrado' });
    }

    const senhaCriptografada = bcrypt.hashSync(senha, 5);

    const novoUsuario = { id: usuarios.length + 1, nome, email, senha: senhaCriptografada };

        usuarios.push(novoUsuario);

        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    const usuario =  usuario.find(user => user.email === email);

    if (!usuario) {
        return res.status(400).json({ error: 'Email ou senha invalidos' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
        return res.status(400).json({ error: 'Email ou senha invalidos' });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.SECRET, { expiresIn: 600 });

    res.json({ message: 'Login realizado com sucesso', token });
};

module.exports = { registroUsuario, loginUsuario };