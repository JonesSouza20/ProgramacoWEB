/*O que é uma Promise:
Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
Estados de uma Promise:
Pending: Estado inicial, nem cumprida (resolved) nem rejeitada (rejected).
Fulfilled: A operação foi concluída com sucesso.
Rejected: A operação falhou.
Sintaxe:*/

let minhaPromise = new Promise(function(resolve, reject) {
    // Lógica da operação assíncrona
    if ( sucesso ) {
        resolve('Operação bem-sucedida!');
    } else {
        reject('Erro na operação.');
    }
});

/*Método then:
Usado para lidar com o sucesso da Promise. Recebe uma função callback que é executada quando a Promise é resolvida.*/

minhaPromise.then(function(resultado) {
    console.log(resultado); // 'Operação bem-sucedida!'
});

/*Método catch:
Usado para capturar erros ou rejeições da Promise.*/

minhaPromise.catch(function(erro) {
    console.error(erro); // 'Erro na operação.'
});

/*Método finally:
Executado após a Promise ser resolvida ou rejeitada, independente do resultado.*/

minhaPromise.finally(function() {
    console.log('Operação concluída.');
});

/*Promises podem ser encadeadas para que o resultado de uma Promise seja passado para outra, 
criando uma sequência de operações assíncronas.*/

let primeiraPromise = new Promise(function(resolve) {
    resolve(10);
});

primeiraPromise
    .then(function(valor) {
        console.log(valor); // 10
        return valor * 2;
    })
    .then(function(valor) {
        console.log(valor); // 20
        return valor + 5;
    })
    .then(function(valor) {
        console.log(valor); // 25
    })
    .catch(function(erro) {
        console.error(erro);
    });

/*O que é async/await:
async e await são palavras-chave que facilitam o trabalho com Promises, tornando o código assíncrono mais 
legível e semelhante ao código síncrono.
Sintaxe:
Uma função declarada como async sempre retorna uma Promise.
A palavra-chave await faz o JavaScript "esperar" pela resolução de uma Promise.*/

async function minhaFuncao() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Concluído!'), 2000);
    });

    let resultado = await promise;
    console.log(resultado); // 'Concluído!' após 2 segundos
}

minhaFuncao();