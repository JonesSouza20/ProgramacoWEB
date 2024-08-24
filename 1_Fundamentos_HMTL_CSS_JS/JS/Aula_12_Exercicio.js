/*Neste exercício, você irá criar uma aplicação simples de lista de tarefas (To-Do List) 
que permite ao usuário adicionar e remover tarefas. Este projeto envolve a manipulação do 
DOM utilizando HTML, CSS, e JavaScript.*/

/*Objetivo
Criar uma interface onde o usuário pode adicionar tarefas a uma lista e 
removê-las quando completadas.
Aprender a utilizar eventos para interagir com o DOM.
Praticar a criação e remoção de elementos HTML através do JavaScript.*/

/*Desafios Extras
Desafio 1: Permitir que o usuário adicione tarefas pressionando a tecla "Enter".
Desafio 2: Adicionar um botão "Limpar Lista" para remover todas as tarefas de uma vez.
Desafio 3: Implementar a funcionalidade para editar uma tarefa existente.*/

/*JavaScript:

Utilizamos o addEventListener para adicionar um evento ao botão de adicionar tarefas.
Verificamos se o campo de entrada de texto não está vazio antes de criar 
um novo item de lista (<li>).
Criamos um botão de remover para cada tarefa e adicionamos um evento para remover 
a tarefa ao clicar no botão. */

document.getElementById("adicionarBtn").addEventListener("click", function() {
    // Seleciona o valor do input
    let tarefaTexto = document.getElementById("tarefaInput").value;

    // Verifica se o input não está vazio
    if (tarefaTexto !== "") {
        // Cria um novo elemento li
        let novaTarefa = document.createElement("li");

        // Adiciona o texto da tarefa ao li
        novaTarefa.innerText = tarefaTexto;

        // Cria o botão de remover
        let botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";

        // Adiciona um evento ao botão de remover
        botaoRemover.addEventListener("click", function() {
            novaTarefa.remove();
        });

        // Adiciona o botão de remover ao li
        novaTarefa.appendChild(botaoRemover);

        // Adiciona o li à lista de tarefas
        document.getElementById("listaTarefas").appendChild(novaTarefa);

        // Limpa o input após adicionar a tarefa
        document.getElementById("tarefaInput").value = "";
    } else {
        alert("Por favor, digite uma tarefa.");
    }
});
