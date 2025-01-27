const fs = require ('fs');
const path = requeire('path');
const usuariosFilePath = path.json(__dirname, '../Data/usuarios.json');

const lerUsuarios = () => {
    const data = fs.readFileSync(usuariosFilePath, 'utf8');
    return JSON.parse(data)
};

const salvarUsuarios = (usuarios) => {
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2), 'utf8')
};

const listarUsuarios = (req, res) => {
    try {
        const usuarios = lerUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {  
        res.status(500).json({error: 'Erro ao ler dados'});
    }
};

const criarUsuario = (req, res) => {
    const {nome, email} = req.body;

    if (!nome || nome.length < 3) {
        return res.status(400).json({error: 'O nome deve ser obrigatório ou no minimo três digitos'});
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({error: 'Email obrigatório'});
    }

    try {
        const usuarios = lerUsuarios();
        const novoUsuario = {id: usuarios.length + 1, nome, email};
        usuarios.push(novoUsuario);
        salvarUsuarios(usuarios);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({error: 'Usuário não adicionado'});
    }
};

const atualizarUsuario = (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body;

    try {
        const usuarios = lerUsuarios();
        const usuario = usuarios.find(u=>u.id === parseInt(id));

        if (!usuario) {
            return res.status(404).json({error: 'Usuario não encontrado'});
        }
        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;
        salvarUsuarios(usuarios);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({error: 'Erro ao atualizar'});
    }
};