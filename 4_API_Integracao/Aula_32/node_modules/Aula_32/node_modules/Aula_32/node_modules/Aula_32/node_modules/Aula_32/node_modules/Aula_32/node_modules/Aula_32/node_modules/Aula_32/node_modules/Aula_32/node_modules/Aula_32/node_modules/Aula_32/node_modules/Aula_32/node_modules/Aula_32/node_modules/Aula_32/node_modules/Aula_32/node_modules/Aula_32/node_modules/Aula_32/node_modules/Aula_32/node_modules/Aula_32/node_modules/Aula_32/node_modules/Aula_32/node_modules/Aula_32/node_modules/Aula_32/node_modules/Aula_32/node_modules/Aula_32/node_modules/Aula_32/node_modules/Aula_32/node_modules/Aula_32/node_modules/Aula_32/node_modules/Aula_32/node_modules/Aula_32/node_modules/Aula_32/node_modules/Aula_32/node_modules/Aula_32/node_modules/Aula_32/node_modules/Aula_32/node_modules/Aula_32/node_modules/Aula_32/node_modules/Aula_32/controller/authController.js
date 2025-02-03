exports.registrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Simulação de registro (adapte para banco de dados)
    const novoUsuario = { id: Date.now(), nome, email, senha };
    
    res.status(201).json({ message: 'Usuário registrado com sucesso!', usuario: novoUsuario });
};