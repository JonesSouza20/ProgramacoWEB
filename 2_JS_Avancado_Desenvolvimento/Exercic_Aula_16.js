/*function operacaoDemorada(){
    return new Promise(function(resolve, reject){
        setTimeout (function(){
            let sucesso = true;
            if (sucesso){
                resolve ("Operação concluida");
            } else {
                reject ("Operação não concluida");
            }
        }, 5000)
    })
}

operacaoDemorada()
    .then(function(mensagem){
        console.log(mensagem);
    })
    .catch(function(erro){
        console.log(erro);
    });

async function executarOperacao() {
    try{
        let resultado = await operacaoDemorada();
        console.log(resultado)
    } catch(erro){
        console.log(erro)
    }
}

executarOperacao(); */

async function carregarDados() {
    let resposta =  await fetch('https://jsonplaceholder.typicode.com/posts');
    let dados =  await resposta.json();
    try{
        resposta;
        dados;
        console.log(dados)
    } catch (erro){
        console.log("Erro ao carregar dados: ", erro);
    }
}

carregarDados();