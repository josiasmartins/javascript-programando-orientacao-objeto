// const client1Nome = 'Ricardo';
// const client1CPF = '11122233309';
// const cliente1Agencia = '1001';
// const cliente1Saldo = 0;

// const client2Nome = 'Alice';
// const client2CPF = '88822233309';
// const cliente2Agencia = '1001';
// const cliente2Saldo = 0;

// console.log(client1Nome);

// class: uma classe é o molde que define o resultado que queremos obter, e os objetos são criados a partir de um molde.
class Cliente {
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor) {   
            this.saldo -= valor;
        }
    };
    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
        }
    }
}

// new: cria uma nova instancia da classe;
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;


console.log(cliente1);
console.log(cliente2);


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
// console.log(contaCorrenteRicardo.saldo);
// contaCorrenteRicardo.saldo += -100;
// console.log(contaCorrenteRicardo.saldo);
// contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);


// let valorSacado = 200;
// if(contaCorrenteRicardo.saldo >= valorSacado) {
//     contaCorrenteRicardo.saldo -= valorSacado;
// }
console.log(contaCorrenteRicardo.saldo);

// // para acessar a propriedade da classe, usa a sintaxe objeto.atributo

// cliente1.agencia = 1001;
// cliente1.saldo = 0;
// // cliente1.rg = 123456789,


// cliente2.agencia = 1001;
// cliente2.saldo = 0;
// console.log(cliente2);
