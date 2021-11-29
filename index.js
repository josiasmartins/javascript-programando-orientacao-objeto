// const client1Nome = 'Ricardo';
// const client1CPF = '11122233309';
// const cliente1Agencia = '1001';
// const cliente1Saldo = 0;

// const client2Nome = 'Alice';
// const client2CPF = '88822233309';
// const cliente2Agencia = '1001';
// const cliente2Saldo = 0;

// console.log(client1Nome);

// class: é
class cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

// new: cria uma nova instancia da classe;
const cliente1 = new cliente();
const cliente2 = new cliente();

// para acessar a propriedade da classe, usa a sintaxe objeto.atributo
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
// cliente1.rg = 123456789,
console.log(cliente1);

cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;
console.log(cliente2);
