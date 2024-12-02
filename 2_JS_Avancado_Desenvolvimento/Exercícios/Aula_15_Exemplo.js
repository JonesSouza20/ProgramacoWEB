/*Crie elementos aninhados (pai e filho) e demonstre a propagação do evento.*/

document.getElementById("pai").addEventListener("click", function() {
    alert("Pai clicado!");
}, true); // Capturing

document.getElementById("filho").addEventListener("click", function() {
    alert("Filho clicado!");
}, false); // Bubbling
