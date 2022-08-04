import { Cliente } from "./cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    this._cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) this._cliente = novoCliente;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor > 0) this._saldo += valor;
    return;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
    }
  }

  transferir(valor, conta) {
    const saque = this.sacar(valor);
    conta.depositar(saque);
  }

}
