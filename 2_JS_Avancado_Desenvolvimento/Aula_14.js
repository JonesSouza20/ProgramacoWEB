//MAP:
/*O método map cria um novo array com os resultados de uma 
função aplicada a cada elemento do array original.*/

/*let novoArray = arrayOriginal.map(function(elemento) {
    // Código para transformar o elemento
});
*/
//Transformando uma lista de números multiplicando cada um por 2.

let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobrados); // [2, 4, 6, 8, 10]


//Criando uma lista de nomes em maiúsculas
let nomes = ["Ana", "Bia", "Carlos"];
let nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});
console.log(nomesMaiusculos); // ["ANA", "BIA", "CARLOS"]

//FILTER:
/*O método filter cria um novo array com todos os elementos que 
passam no teste implementado pela função fornecida.*/

/*let novoArray1 = arrayOriginal.filter(function(elemento) {
    // Código que retorna true ou false
});*/

//Filtrando uma lista de números para obter apenas os números pares.
let numeros1 = [1, 2, 3, 4, 5, 6];
let pares = numeros1.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares); // [2, 4, 6]

/*Filtrando uma lista de objetos para obter apenas aqueles com 
uma certa propriedade.*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bia", idade: 17 },
    { nome: "Carlos", idade: 30 }
];

let adultos = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 18;
});
console.log(adultos); // [{ nome: "Ana", idade: 25 }, { nome: "Carlos", idade: 30 }]

//MÉTODO
/*O método reduce aplica uma função acumuladora sobre 
os elementos de um array, resultando em um único valor.*/
/*let resultado = arrayOriginal.reduce(function(acumulador, elemento) {
    // Código para acumular o valor
}, valorInicial);*/

//Somando todos os números de um array.
let numeros2 = [1, 2, 3, 4, 5];
let soma = numeros2.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(soma); // 15

//Contando o número de vezes que um item aparece em um array.
let frutas = ["maçã", "banana", "laranja", "maçã", "banana"];
let contagem = frutas.reduce(function(acumulador, fruta) {
    if (acumulador[fruta]) {
        acumulador[fruta]++;
    } else {
        acumulador[fruta] = 1;
    }
    return acumulador;
}, {});
console.log(contagem); // { maçã: 2, banana: 2, laranja: 1 }

//COMBINAÇÃO DE METODOS
//Transformando e filtrando dados em um array.
let numeros3 = [1, 2, 3, 4, 5, 6];
let resultado1 = numeros3
    .map(function(numero) {
        return numero * 3;
    })
    .filter(function(numero) {
        return numero % 2 === 0;
    });
console.log(resultado1); // [6, 12,18]






