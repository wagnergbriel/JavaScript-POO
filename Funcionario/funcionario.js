export class Funcionario {
  constructor(nome, cpf, salario) {
    this._nome = nome;
    this._cpf = cpf;
    this._salario = salario;
    this._senha;
    this._bonificacao = 1;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }

  autenticar(senha) {
    return senha == this._senha;
  }

  get cpf() {
    return this._cpf;
  }

  get nome() {
    return this._nome;
  }

  get salario() {
    return this._salario;
  }
}