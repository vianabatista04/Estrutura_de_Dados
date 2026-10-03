export function criarAluno({ id, matricula, nome, email, curso, notas = [] }) {
  return {
    id,
    matricula,
    nome,
    email,
    curso,
    notas: Array.isArray(notas) ? [...notas] : [],
  };
}