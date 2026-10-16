import { VinculoNaTurma } from "./VinculoNaTurma.js";

export class Turma{
    #codigo;
    #componenteCurricular;
    #vinculos=[];

    constructor(codigo, componenteCurricular){
        this.#codigo=codigo;
        this.#componenteCurricular= componenteCurricular;
    }
    get codigo() {return this.#codigo;}
    get componenteCurricular() {return this.#componenteCurricular;}

    matricularEstudante(estudante){
        if (!estudante || !estudante.matricula) {
            throw new Error("Erro: Estudante inválido para matrícula.");
        }
        const jaMatriculado=this.#vinculos.some(v => v.estudante && v.estudante.matricula === estudante.matricula);
        if (jaMatriculado){
            throw new RangeError(`Erro: O aluno ${estudante.nome} (Matrícula: ${estudante.matricula}) já está matriculado na turma ${this.#codigo}.`);
        }
        const novoVinculo=new VinculoNaTurma(estudante);
        this.#vinculos.push(novoVinculo);
        return true;
    }
    listarMatriculados(){
        return this.#vinculos.map(v => v.obterResumo());
    }
    obterResumo(){
        return{
            codigo: this.#codigo,
            componenteCurricular: this.#componenteCurricular,
            totalAlunos: this.#vinculos.length,
            estudantes: this.listarMatriculados()
        };
    }
}