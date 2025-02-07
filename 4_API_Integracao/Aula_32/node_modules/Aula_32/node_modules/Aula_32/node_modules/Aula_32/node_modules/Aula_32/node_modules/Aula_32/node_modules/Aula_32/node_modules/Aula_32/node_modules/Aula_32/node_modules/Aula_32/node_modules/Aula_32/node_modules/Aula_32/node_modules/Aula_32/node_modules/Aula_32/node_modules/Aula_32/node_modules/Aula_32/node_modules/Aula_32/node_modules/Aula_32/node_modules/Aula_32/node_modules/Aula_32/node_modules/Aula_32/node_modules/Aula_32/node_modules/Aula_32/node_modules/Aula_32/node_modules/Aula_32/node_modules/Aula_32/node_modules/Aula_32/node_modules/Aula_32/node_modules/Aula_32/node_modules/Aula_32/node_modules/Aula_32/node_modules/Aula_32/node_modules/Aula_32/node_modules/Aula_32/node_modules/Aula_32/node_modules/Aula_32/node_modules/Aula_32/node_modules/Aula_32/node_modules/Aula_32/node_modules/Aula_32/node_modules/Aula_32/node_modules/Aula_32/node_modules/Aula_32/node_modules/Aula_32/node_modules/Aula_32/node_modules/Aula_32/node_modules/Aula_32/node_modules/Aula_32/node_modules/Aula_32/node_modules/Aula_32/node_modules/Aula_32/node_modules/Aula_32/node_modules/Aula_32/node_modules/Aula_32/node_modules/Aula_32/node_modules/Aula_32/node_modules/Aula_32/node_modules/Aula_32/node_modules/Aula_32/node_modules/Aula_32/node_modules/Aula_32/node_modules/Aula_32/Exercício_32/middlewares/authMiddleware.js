const jwt = require('jsonwebtoken');
require('dotenv').config();

const autenticarToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ erro: 'Acesso negado' });
    }

    try {
        jwt.verify(token, process.env.SECRET, (err, user) => { // Verifica se o token é válido e se é o mesmo que foi gerado
            if (err) {
                return res.status(403).json({ erro: 'Token inválido' }); // 403 - Forbidden (Proibido) - O servidor entendeu a solicitação, mas se recusa a cumpri-la.
            }
            req.user = user; // Adiciona o usuário ao objeto req para ser utilizado nas próximas funções
            next();
        });
    } catch (err) { // Se houver algum erro, retorna um erro interno
        return res.status(500).json({ erro: 'Erro interno' }); // 500 - Internal Server Error (Erro interno do servidor) - O servidor encontrou uma situação com a qual não sabe lidar.
    }
};

module.exports = autenticarToken;