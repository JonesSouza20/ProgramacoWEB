function dobraPares(numeros){
    return numeros
        .filter(numero=>numero % 2===0)
        .map(numero=>numero * 2)
}
let resultado = dobraPares([1, 2, 3, 4, 5, 6]);
console.log(resultado);

function somaImpares(numeros){
    return numeros
    .filter(numero=>numero % 2!==0)
    .reduce((acumulador, numero) => acumulador + numero, 0)
}
let resultado1 = somaImpares([1, 2, 3, 4, 5, 6]);
console.log(resultado1);

function contarPalavras(palavras){
    return palavras.reduce((acumulador, palavra) =>{
    if (acumulador[palavra]){
        acumulador [palavra] ++;
    }
    else{
        acumulador[palavra] =0;
    }
    return acumulador;
},{});

}

let resultado2 = contarPalavras(["Ana", "Bia", "Ana", "Carlos", "Bia", "Ana"]);

console.log(resultado2);