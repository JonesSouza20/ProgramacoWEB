/*Crie uma função que, dado um array de números, 
retorne um novo array contendo apenas os números pares dobrados.*/

function dobrarPares(numeros) {
    return numeros
        .filter(numero => numero % 2 === 0)
        .map(numero => numero * 2);
}

let resultado = dobrarPares([1, 2, 3, 4, 5, 6]);
console.log(resultado); // [4, 8, 12]

/*Dado um array de números, retorne a soma de todos os 
números ímpares usando reduce.*/

function somaImpares(numeros) {
    return numeros
        .filter(numero => numero % 2 !== 0)
        .reduce((acumulador, numero) => acumulador + numero, 0);
}

let resultado1 = somaImpares([1, 2, 3, 4, 5, 6]);
console.log(resultado1); // 9

/*Dado um array de palavras, retorne um objeto que conte 
quantas vezes cada palavra aparece no array.*/
function contarPalavras(palavras) {
    return palavras.reduce((acumulador, palavra) => {
        if (acumulador[palavra]) {
            acumulador[palavra]++;
        } else {
            acumulador[palavra] = 0;
        }
        return acumulador;
    }, {});
}

let resultado2 = contarPalavras(["ana", "bia", "ana", "carlos", "bia", "ana"]);
console.log(resultado2); // { ana: 3, bia: 2, carlos: 1 }

