import { Cliente } from './cliente.js';
import { ContaCorrente } from './contaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);

// package.json: todo projeto Node possui um arquivo de configuração contendo uma série de informações
// sobre o pacote com que estamos trabalhando;