/*Implemente uma modal que abre ao clicar em um botão e fecha ao clicar fora da modal ou em um botão de fechar.*/

let modal = document.getElementById("modal");
let btnAbrir = document.getElementById("abrirModal");
let spanFechar = document.getElementsByClassName("fechar")[0];

// Abrir o modal
btnAbrir.onclick = function() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false"); // Acessibilidade
}

// Fechar o modal ao clicar no botão de fechar
spanFechar.onclick = function() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }
}

