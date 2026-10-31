import type { Turma } from "../tipos/turma.js";
import type { Estudante } from "../tipos/estudante.js";

const bancoTurmas: Turma[]=[];
export function criarTurma(id:string, nome:string, codDisciplina:string): Turma{
    const novaTurma:Turma={
        id,
        nome,
        codDisciplina,
        matriculasEstudante:[]
    };
    bancoTurmas.push(novaTurma);
    return novaTurma
}

export function matriculaEstudante(idTurma:string, estudante: Estudante): boolean{
    const turma = bancoTurmas.find((valor) => valor.id === idTurma);
    if(!turma){
        return false;
    }
    if (!estudante.ativo){
        return false;
    }
    const jaMatriculado=turma.matriculasEstudante.includes(estudante.matricula);
    if (jaMatriculado){
        return false;
    }
    turma.matriculasEstudante.push(estudante.matricula);
    return true;
}

export function buscarTurmaporId(id:string): Turma | null {
    const turma = bancoTurmas.find((valor) => valor.id === id);
    return turma ?? null;
}