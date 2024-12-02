//Crie uma página que exibe a última tecla pressionada pelo usuário.

document.addEventListener("keydown", function(event) {
    document.getElementById("teclaPressionada").innerText = "Você pressionou: " + event.key;
});
