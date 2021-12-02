export class Cliente {
    nome;
    _cpf;

    get cpf() {
        this._cpf;
        return this._cpf;
    }

    // constructor(): função especial que recebe, por exemplo, os atributos 
    // que a classe precisa para criar um novo objeto, nesse caso, nome e cpf
    constructor(nome, cpf) {
        // this: associar o parametros recebidos por parâmetros com os próprios atributos 'nome' e '_cpf' da classe Cliente
        this.nome = nome;
        this._cpf = cpf;
    }
}