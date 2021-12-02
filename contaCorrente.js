import { Cliente } from './cliente.js';

export class ContaCorrente {
    // static: utilizar atributo estático, que reflete as alterações em todos os objetos daquela classe, usando a palavra reservada static
    static numerosDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0;

    constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numerosDeContas += 1;
    }

    // set: usado quando quando precisamos acessar o atributo privado 
    // e dando acesso de forma controlada, os chamados métodos assessores
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    // get: retorna o valor... ele é outro método assessores
    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        // conta.depositar(valorSacado);
    }

}