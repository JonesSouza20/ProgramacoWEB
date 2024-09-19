async function dadosAPI(){
    let resposta = await fetch('https://jsonplaceholder.typicode.com/comments');
    let resultado = await resposta.json();
    try {
        resposta;
        resultado;
        console.log(resultado)
    } catch (erro) {
        console.log("Não foi possível carregar os dados da API. ", erro);
    }
}

dadosAPI();