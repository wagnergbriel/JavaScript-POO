import { Gerente } from "./Funcionario/gerente.js";
import { SistemaAutenticacao } from "./sistemaautenticacao.js";

const gerente = new Gerente("Wagner", 16275040793, 5000);
gerente.cadastrarSenha(1234)
const logado = SistemaAutenticacao.login(gerente, 123)
console.table(logado)