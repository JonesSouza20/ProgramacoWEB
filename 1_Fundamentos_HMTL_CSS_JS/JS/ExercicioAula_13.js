//Exercicío onde temos um carrinho de compras e conseguimos adicionar, remover e visualizar os itens presentes.
let compras = [
  ["Banana", "Morango", "Abacaxi"], //Frutas.
  ["sucos", "refrigerantes", "alcoolicas"], //Bebidas.
  ["Carnes", "Frango", "Ovos"], //Proteinas.
  ["Chocolates", "Balas", "Bolachas"] //Doces.
];

console.log(compras);

//Adicionando itens.
compras[0].push("Uva");
compras[1].push("Energético");
compras[2].push("Peixes");
compras[3].push("Bombom");

console.log(compras);

//Removendo itens.
compras[0].shift();
compras[1].shift();
compras[2].shift();
compras[3].shift();

console.log(compras);

//Visualizando o carrinho e a quantidade de itens.
let carrinho = [
    {categoria: "Frutas", itens: compras[0].length},
    {categoria: "Bebidas", itens: compras[1].length},
    {categoria: "Proteínas", itens: compras[2].length},
    {categoria: "Doces", itens: compras[3].length},
    compras
];

console.log(carrinho);