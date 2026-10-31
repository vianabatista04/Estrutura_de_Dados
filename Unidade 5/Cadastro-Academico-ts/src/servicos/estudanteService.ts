import type{ Estudante, CriarAlunoParams } from "../tipos/estudante.js";

const bancosEstudantes: Estudante[]=[];

export function criarAluno({ id, matricula, nome, curso,ativo, notas = [] }: CriarAlunoParams): Estudante {
  return {
    id,
    matricula,
    nome,
    curso,
    ativo,
    notas: Array.isArray(notas) ? [...notas] : [],
  };
}
export function cadastrarEstudante(estudante:Estudante): void {
    bancosEstudantes.push(estudante);
}
export function buscarPorMatricula(matricula: string): Estudante | null {
    const estudante=bancosEstudantes.find((e) => e.matricula === matricula);
    return estudante ?? null;
}
export function calcularMedia(estudante:Estudante):number{
    if (!estudante.notas || estudante.notas.length===0){
        return 0;
    }
    const soma=estudante.notas.reduce((valor, nota) => valor+nota,0);
    return soma/estudante.notas.length;
}