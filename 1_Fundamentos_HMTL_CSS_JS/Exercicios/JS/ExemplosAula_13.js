//Arrays

/*Arrays em JavaScript são indexados a partir de zero, o que significa 
que o primeiro elemento está na posição 0.*/
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã"

//Utilize o índice para acessar elementos específicos do array.
console.log(frutas[1]); // "Banana"

//Atribua um novo valor a um índice específico para modificar um elemento.
frutas[2] = "Manga";
console.log(frutas); // ["Maçã", "Banana", "Manga"]

//Use o método push para adicionar elementos ao final do array.
frutas.push("Uva");
console.log(frutas); // ["Maçã", "Banana", "Manga", "Uva"]

//Utilize o método pop para remover o último elemento do array.
frutas.pop();
console.log(frutas); // ["Maçã", "Banana", "Manga"]

//Retorna o número de elementos em um array.
console.log(frutas.length); // 3

/*shift remove o primeiro elemento do array.
unshift adiciona um novo elemento no início do array.*/
frutas.shift();
console.log(frutas); // ["Banana", "Manga"]

frutas.unshift("Morango");
console.log(frutas); // ["Morango", "Banana", "Manga"]

/*slice retorna uma cópia de uma parte do array.
splice adiciona ou remove elementos de qualquer posição no array.*/
let citricos = frutas.slice(1, 2);
console.log(citricos); // ["Banana"]

frutas.splice(1, 1, "Pera");
console.log(frutas); // ["Morango", "Pera", "Manga"]

//Objetos

//Objetos são usados para armazenar coleções mais complexas de dados.
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};
console.log(pessoa.nome); // "João"

//Utilize a notação de ponto ou colchetes para acessar propriedades de um objeto.
console.log(pessoa["idade"]); // 30
console.log(pessoa.profissao); // "Desenvolvedor"

//Atribua um novo valor a uma propriedade específica para modificá-la.
pessoa.idade = 31;
console.log(pessoa.idade); // 31

//Utilize a palavra-chave delete para remover uma propriedade.
pessoa.email = "joao@example.com";
console.log(pessoa.email); // "joao@example.com"

delete pessoa.email;
console.log(pessoa.email); // undefined

//Um array de objetos é uma estrutura onde cada elemento do array é um objeto.
let usuarios = [
    {nome: "Ana", idade: 28},
    {nome: "Carlos", idade: 35},
    {nome: "Maria", idade: 22}
];

console.log(usuarios[1].nome); // "Carlos"

//Você pode iterar sobre o array e acessar/modificar as propriedades dos objetos.
usuarios.forEach(function(usuario) {
    console.log(usuario.nome);
});
// Output: "Ana", "Carlos", "Maria"