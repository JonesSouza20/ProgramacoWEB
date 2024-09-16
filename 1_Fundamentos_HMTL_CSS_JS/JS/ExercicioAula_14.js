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

  let produtos = [
    {nome: "Morango", preco: 4.90, categoria: "Frutas" },
    {nome: "Abacaxi", preco: 5.80, categoria: "Frutas"},
    {nome: "Uva", preco: 3.90, categoria: "Frutas"},
    {nome: "Energético", preco: 9.90, categoria: "Bebidas"},
    {nome: "Refrigerante", preco: 15, categoria: "Bebidas"},
    {nome: "Cerveja", preco: 6.90, categoria: "Bebidas"},
    {nome: "Frango", preco: 22.90, categoria: "Proteinas"},
    {nome: "Ovos", preco: 15, categoria: "Proteinas"},
    {nome: "Peixes", preco: 29.90, categoria: "Proteinas"}
];

function somarProdutos(categoria) {
    return produtos
      .filter(produto => produto.categoria === categoria)
      .map(produto => produto.preco)
      .reduce((total, preco) => total + preco, 0);
  }

  const totalBebidas = somarProdutos("Bebidas");
  const totalFrutas = somarProdutos("Frutas");
  const totalProteinas = somarProdutos("Proteinas");

  console.log("Total de bebidas ", totalBebidas)
  console.log("Total de bebidas ", totalFrutas)
  console.log("Total de bebidas ", totalProteinas)