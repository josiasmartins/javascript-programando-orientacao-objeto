import { Cliente } from './cliente.js';
import { ContaCorrente } from './contaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
new ContaCorrente(1002, cliente2);
new ContaCorrente(1002, cliente2);
new ContaCorrente(1002, cliente2);
new ContaCorrente(1002, cliente2);
new ContaCorrente(1002, cliente2);
new ContaCorrente(1002, cliente2);


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numerosDeContas);
// package.json: todo projeto Node possui um arquivo de configuração contendo uma série de informações
// sobre o pacote com que estamos trabalhando;