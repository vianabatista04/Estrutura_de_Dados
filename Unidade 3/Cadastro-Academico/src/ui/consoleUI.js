import { cadastrarAluno } from "../services/alunoService.js";

export function exibirResultadoDoCadastro(resultado) {
  if (!resultado.sucesso) {
    console.error("Não foi possível cadastrar o aluno:");
    for (const erro of resultado.erros) {
      console.error(`- ${erro}`);
    }
    return;
  }
  console.log(`Aluno ${resultado.aluno.nome} cadastrado com sucesso.`);
}

export function exibirListaDeAlunos(alunos) {
  if (!Array.isArray(alunos) || alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
    return;
  }
  for (const aluno of alunos) {
    console.log(
      `${aluno.matricula} | ${aluno.nome} | ` +
      `média ${aluno.media.toFixed(1)} | ${aluno.situacao}`
    );
  }
}

export function processarCadastro(dadosEntrada){
    const resultado=cadastrarAluno(dadosEntrada);
    exibirResultadoDoCadastro(resultado);
    return resultado;
}