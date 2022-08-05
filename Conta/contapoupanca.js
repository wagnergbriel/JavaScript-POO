import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldo, cliente, agencia) {
    super(saldo, agencia, cliente);
  }

  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}