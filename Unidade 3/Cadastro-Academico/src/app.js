import { calcularMedia, classificarMedia } from "./utils/calculos.js";
import {
    cadastrarAluno,
    listarAlunosComSituacao,
    gerarRelatorioAprovadosPorNome,
    gerarRelatorioReprovadosPorMedia,
    gerarRelatorioCursoCSV,
    gerarResumoPorCurso,
} from "./services/alunoService.js";
import{
    exibirResultadoDoCadastro,
    exibirListaDeAlunos,
} from "./ui/consoleUI.js";

const mediaTeste = calcularMedia([8, 7, 9]);
const situacaoTeste = classificarMedia(mediaTeste);
console.log({ media: mediaTeste, situacao: situacaoTeste });

const resultadoAna = cadastrarAluno({
  matricula: "2026001", 
  nome: "Ana Silva",
  email: "ANA@EXEMPLO.COM",
  curso: "tads",
  notas: [8, 7.5, 9],
});

const resultadoBruno = cadastrarAluno({
  matricula: "2026002",
  nome: "Bruno Souza",
  email: "bruno.exemplo.com",
  curso: "TADS",
  notas: [5, 6, 7],
});

const resultadoCarlos = cadastrarAluno({
    matricula: "2026003",
  nome: "Carlos Eduardo",
  email: "carlos@exemplo.com",
  curso: "TADS",
  notas: [4, 5, 3],
})
console.log("\n==== Resultados dos Cadastros ====");
exibirResultadoDoCadastro(resultadoAna);
exibirResultadoDoCadastro(resultadoBruno);
exibirResultadoDoCadastro(resultadoCarlos);

console.log("\n==== Lista Geral de Alunos ====");
const alunos = listarAlunosComSituacao();
exibirListaDeAlunos(alunos);

console.log("\n=== 1. Aprovados Ordenados por Nome ===");
console.table(gerarRelatorioAprovadosPorNome());

console.log("\n=== 2. Reprovados (Menor para Maior Média) ===");
console.table(gerarRelatorioReprovadosPorMedia());

console.log("\n=== 3. Alunos do Curso TADS em CSV ===");
const relatorioCSV = gerarRelatorioCursoCSV("TADS");
relatorioCSV.forEach((linha) => console.log(linha));

console.log("\n=== 4. Resumo por Curso (Quantidade e Média Geral) ===");
console.table(gerarResumoPorCurso());