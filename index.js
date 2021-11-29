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
    // _saldo: '_' usado pela comunidade para representar um dado privado
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {   
            this._saldo -= valor;
            return valor;
        }
        // return: tem duas funções: parar execução antecipadamente ao 
        // depararmos com uma condição indesejada, algo que chamamos de early return;
        // ou realmente retornar um valor;
        return
    };
    depositar(valor) {
        if(valor < 0) {
            return;
        }
        this._saldo += valor;
    }
}

// new: cria uma nova instancia da classe;
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;


// console.log(cliente1);
// console.log(cliente2);


const contaCorrenteRicardo = new ContaCorrente();
// contaCorrenteRicardo.saldo = 1000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);


// let valorSacado = 200;
// if(contaCorrenteRicardo.saldo >= valorSacado) {
//     contaCorrenteRicardo.saldo -= valorSacado;
// }

// // para acessar a propriedade da classe, usa a sintaxe objeto.atributo

// cliente1.agencia = 1001;
// cliente1.saldo = 0;
// // cliente1.rg = 123456789,


// cliente2.agencia = 1001;
// cliente2.saldo = 0;
// console.log(cliente2);
