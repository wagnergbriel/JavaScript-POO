export class Conta {
  constructor(saldo, agencia, cliente) {
    this._saldo = saldo;
    this._cliente = cliente;
    this.agencia = agencia;
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
    let taxa = 1;
    return this._sacar(taxa, valor)
  }

  _sacar(taxa, valor) {
    const saque = taxa * valor
    if (this._saldo >= valor) {
      this._saldo -= saque;
      return saque;
    }
    return 0
  }

  transferir(valor, conta) {
    const saque = this.sacar(valor);
    conta.depositar(saque);
  }

}
