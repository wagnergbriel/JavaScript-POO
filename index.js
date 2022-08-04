import { Cliente } from "./cliente.js"
import { ContaCorrente } from "./contacorrente.js"

const cliente1 = new Cliente("Wagner", "16275040793");
const conta1 = new ContaCorrente(1, cliente1)
const cliente2 = new Cliente("Joao", "25698745636");
const conta2 = new ContaCorrente(1, cliente2)

conta1.depositar(5000);
conta1.transferir(50, conta2);
conta2.depositar(500);
conta2.sacar(50);

console.table(conta1);
console.table(conta2);
console.log(ContaCorrente.numeroDeContas)