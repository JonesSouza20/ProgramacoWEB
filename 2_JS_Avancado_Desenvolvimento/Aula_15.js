/*Eventos de Mouse:
click: Disparado quando um elemento é clicado.
dblclick: Disparado quando um elemento é clicado duas vezes.
mouseover: Disparado quando o ponteiro do mouse passa sobre um elemento.
mouseout: Disparado quando o ponteiro do mouse deixa um elemento.*/

let botao = document.querySelector("button");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});

/*Eventos de Teclado:
keydown: Disparado quando uma tecla é pressionada.
keyup: Disparado quando uma tecla é liberada.*/

document.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada: " + event.key);
});

/*Eventos de Formulário:
submit: Disparado quando um formulário é enviado.
change: Disparado quando o valor de um elemento input, select, ou textarea muda.*/

let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulário enviado!");
});

/*Adicionar Eventos:
Use o método addEventListener para adicionar um evento a um elemento.*/

let botao1 = document.querySelector("button");
botao1.addEventListener("click", function() {
    console.log("Botão clicado! Adicionar Eventos");
});

/*Remover Eventos:
Use o método removeEventListener para remover um evento de um elemento.*/

function cliqueBotao() {
    console.log("Botão clicado! Remover Eventos");
}

botao1.addEventListener("click", cliqueBotao);
botao1.removeEventListener("click", cliqueBotao);

/*Externos:
Separar a lógica do evento do HTML, utilizando addEventListener.*/

let botao2 = document.querySelector("button");
botao2.addEventListener("click", minhaFuncao);

function minhaFuncao() {
    console.log("Botão clicado! Externos");
}

/*Vantagens:
Permite a adição de múltiplos listeners ao mesmo evento.
Separa o JavaScript do HTML, mantendo o código mais organizado.*/
let botao3 = document.querySelector("button");
botao3.addEventListener("click", function() {
    console.log("Botão clicado Vantagens!");
});
botao3.addEventListener("click", function() {
    alert("Outro evento no mesmo botão! Vantagens");
});


