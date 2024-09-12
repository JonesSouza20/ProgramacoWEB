//Implemente uma validação simples de formulário usando eventos, onde o usuário deve preencher todos os campos antes de enviar.

let formulario = document.getElementById("meuFormulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos.";
    } else {
        document.getElementById("mensagem").innerText = "Formulário enviado com sucesso!";
    }
});
