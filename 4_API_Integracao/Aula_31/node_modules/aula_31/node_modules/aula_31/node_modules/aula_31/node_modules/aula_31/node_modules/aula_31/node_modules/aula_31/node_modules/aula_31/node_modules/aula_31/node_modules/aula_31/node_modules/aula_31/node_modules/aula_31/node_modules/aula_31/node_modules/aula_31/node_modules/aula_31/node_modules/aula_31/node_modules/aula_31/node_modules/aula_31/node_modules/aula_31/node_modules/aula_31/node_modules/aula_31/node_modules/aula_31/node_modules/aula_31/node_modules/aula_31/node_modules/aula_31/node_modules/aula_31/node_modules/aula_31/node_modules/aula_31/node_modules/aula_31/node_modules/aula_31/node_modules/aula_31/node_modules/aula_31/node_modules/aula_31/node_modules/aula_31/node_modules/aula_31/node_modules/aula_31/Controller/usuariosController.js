const fs = require ('fs'); //Importando o módulo fs que permite manipular arquivos no sistema.
const path = requeire('path'); //importando o módulo path que permite manipular caminhos de arquivos.
const usuariosFilePath = path.json(__dirname, '../Data/usuarios.json'); //Caminho do arquivo usuarios.json

const lerUsuarios = () => {  //Função que lê o arquivo usuarios.json
    const data = fs.readFileSync(usuariosFilePath, 'utf8'); //Lendo o arquivo usuarios.json
    return JSON.parse(data) //Retornando o arquivo usuarios.json em formato JSON
};

const salvarUsuarios = (usuarios) => { //Função que salva os dados no arquivo usuarios.json
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2), 'utf8') //Salvando os dados no arquivo usuarios.json
};

const listarUsuarios = (req, res) => { //Função que lista os usuários
    try { //Tentando executar o código
        const usuarios = lerUsuarios(); //Lendo os usuários
        res.status(200).json(usuarios); //Retornando os usuários
    } catch (error) {   //Se houver erro
        res.status(500).json({error: 'Erro ao ler dados'}); //Retorna a mensagem de erro
    }
};

const criarUsuario = (req, res) => { //Função que cria um usuário
    const {nome, email} = req.body; //Recebendo o nome e email do usuário

    if (!nome || nome.length < 3) { //Se o nome não for informado ou tiver menos de 3 caracteres
        return res.status(400).json({error: 'O nome deve ser obrigatório ou no minimo três digitos'}); //Retorna a mensagem de erro
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Expressão regular para validar o email
    
    if (!email || !emailRegex.test(email)) {    //Se o email não for informado ou não for válido
        return res.status(400).json({error: 'Email obrigatório'});  //Retorna a mensagem de erro
    }

    try {   //Tentando executar o código
        const usuarios = lerUsuarios(); //Lendo os usuários
        const novoUsuario = {id: usuarios.length + 1, nome, email}; //Criando um novo usuário
        usuarios.push(novoUsuario); //Adicionando o novo usuário no array de usuários
        salvarUsuarios(usuarios); //Salvando os usuários
        res.status(201).json(novoUsuario); //Retornando o novo usuário criado com o status 201 (Created) 
    } catch (error) { //Se houver erro na execução do código acima 
        res.status(500).json({error: 'Usuário não adicionado'}); //Retorna a mensagem de erro 
    }
};

const atualizarUsuario = (req, res) => { //Função que atualiza um usuário 
    const {id} = req.params; //Recebendo o id do usuário a ser atualizado 
    const {nome, email} = req.body; //Recebendo o nome e email do usuário a ser atualizado 

    try { //Tentando executar o código 
        const usuarios = lerUsuarios(); //Lendo os usuários 
        const usuario = usuarios.find(u=>u.id === parseInt(id)); //Procurando o usuário pelo id 

        if (!usuario) { //Se o usuário não for encontrado 
            return res.status(404).json({error: 'Usuario não encontrado'}); //Retorna a mensagem de erro 
        }
        usuario.nome = nome || usuario.nome; //Atualizando o nome do usuário 
        usuario.email = email || usuario.email; //Atualizando o email do usuário
        salvarUsuarios(usuarios); //Salvando os usuários 
        res.status(200).json(usuario); //Retornando o usuário atualizado 
    } catch (error) { //Se houver erro na execução do código acima
        res.status(500).json({error: 'Erro ao atualizar'}); //Retorna a mensagem de erro 
    }
};