import type { Estudante, DadosEstudanteEntrada } from "./tipos/estudante.js";
import type { StatusChamado } from "./tipos/chamado.js";
import { validarEstudante } from "./validacao/validarEstudante.js";
import { cadastrarEstudante, buscarPorMatricula, calcularMedia } from "./servicos/estudanteService.js";
import { criarChamado, atualizarStatusChamado } from "./servicos/chamadoService.js";
import { criarTurma, matriculaEstudante } from "./servicos/turmaService.js";


const entradaDesconhecida: DadosEstudanteEntrada = {
  id: "04",
  nome: "Maria Silva",
  matricula: "2024001",
  curso: "Análise e Desenvolvimento de Sistemas"
};

const resultadoValidacao = validarEstudante(entradaDesconhecida);

if (resultadoValidacao.valido) {

  const novoEstudante: Estudante = {
    id: entradaDesconhecida.id as string,
    matricula: entradaDesconhecida.matricula as string,
    nome: entradaDesconhecida.nome as string,
    curso: (entradaDesconhecida.curso as string) ?? "Geral",
    ativo: true,
    notas: [8.5, 9.0, 7.5]
  };

  cadastrarEstudante(novoEstudante);
  console.log("Estudante cadastrado com sucesso!");


  const media = calcularMedia(novoEstudante);
  console.log(`Média de ${novoEstudante.nome}: ${media.toFixed(2)}`);


  const turmaDev = criarTurma("T01", "Desenvolvimento TypeScript", "TS101");
  const matriculado = matriculaEstudante(turmaDev.id, novoEstudante);
  console.log(`Matrícula na turma ${turmaDev.nome}: ${matriculado ? "Sucesso" : "Falha"}`);

  const chamado = criarChamado("CH-01", novoEstudante.matricula, "Acesso ao portal acadêmico");
  console.log(`Status do chamado criado: ${chamado.status}`);

  const novoStatus: StatusChamado = "EM_ATENDIMENTO";
  const chamadoAtualizado = atualizarStatusChamado(chamado.id, novoStatus);
  console.log(`Status atualizado: ${chamadoAtualizado?.status}`);

} else {
  console.error("Erros de validação:", resultadoValidacao.erros);
}


const estudanteInexistente = buscarPorMatricula("999999");
if (estudanteInexistente === null) {
  console.log("Busca tratada corretamente: Estudante não encontrado.");
}