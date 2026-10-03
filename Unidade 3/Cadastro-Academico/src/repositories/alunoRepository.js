const alunos = [];
let proximoId = 1;

export function obterProximoId() {
  const idAtual = proximoId;
  proximoId += 1;
  return idAtual;
}

export function salvar(aluno) {
  alunos.push(aluno);
  return aluno;
}

export function buscarPorMatricula(matricula) {
    const m = String(matricula ?? "").trim();
  return alunos.find((aluno) => String(aluno.matricula).trim() === m) ?? null;
}

export function listarTodos() {
  return alunos.map((aluno) => ({
    ...aluno,
    notas: [...aluno.notas],
  }));
}

export function removerPorMatricula(matricula) {
    const m = String(matricula ?? "").trim();
    const indice = alunos.findIndex((aluno) => String(aluno.matricula).trim() === m);

  if (indice === -1) {
    return false;
  }

  alunos.splice(indice, 1);
  return true;
}