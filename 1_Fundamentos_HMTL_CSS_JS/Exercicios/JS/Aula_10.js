//Cálculo de média final de notas para aprovação ou não de um aluno, pegando como base uma média acima de 60 para aprovação.

function calcularNota(notaAluno) {
    let media;

    if (notaAluno >= 90) {
        media = "A";
    } else if (notaAluno >= 80) {
        media = "B";
    } else if (notaAluno >= 70) {
        media = "C";
    } else if (notaAluno >= 60) {
        media = "D";
    } else if (notaAluno >= 50) {
        media = "E";
    } else if (notaAluno < 50) {
        media = "F";
    } else {
        return "Nota inválida!";
    }

    return media;
}

function feedbackConceito(media) {
    let mensagem;

    switch (media) {
        case "A":
            mensagem = "Incrível! Você tirou um A.";
            break;
        case "B":
            mensagem = "Parabéns! Você tirou um B.";
            break;
        case "C":
            mensagem = "Muito bem, você tirou um C.";
            break;
        case "D":
            mensagem = "Por pouco, você tirou um D.";
            break;
        case "E":
            mensagem = "Não foi aprovado, precisa melhorar. Sua nota é E.";
            break;
        case "F":
            mensagem = "Infelizmente você foi reprovado! Sua nota é F.";
            break;
        default:
            mensagem = "Erro no cálculo do feedback.";
    }

    return mensagem;
}


let notaAluno = 55;

let media = calcularNota(notaAluno);

if (media === "Nota inválida!") {
    console.log(media);
} else {
    media = feedbackConceito(media);
    console.log(media);
}