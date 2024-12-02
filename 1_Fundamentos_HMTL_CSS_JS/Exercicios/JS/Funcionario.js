//Complementação para a aula de HTML 2 
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade); // Chama o construtor da classe base (Pessoa)
        this.cargo = cargo;
    }

    // Método específico da classe Funcionario
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
}

const funcionario1 = new Funcionario('Carlos', 28, 'Engenheiro');
funcionario1.saudacao(); // Output: Olá, meu nome é Carlos, eu tenho 28 anos e sou Engenheiro.

