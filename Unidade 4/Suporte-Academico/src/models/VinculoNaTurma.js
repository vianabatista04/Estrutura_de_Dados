export class VinculoNaTurma{
    #estudante;
    #dataEntrada;
    #frequencia;
    constructor(estudante, frequencia=100){
        this.#estudante=estudante;
        this.#dataEntrada=new Date();
        this.#frequencia= frequencia;
    }
    get estudante() {return this.#estudante;}
    get dataEntrada() {return new Date(this.#dataEntrada.getTime());}
    get frequencia() {return this.#frequencia;}

    obterResumo(){
        return {
            matricula:this.#estudante?.matricula || 'N/A',
            nome:this.#estudante.nome || 'Sem nome',
            dataEntrada: this.#dataEntrada.toISOString().split('T')[0],
            frequencia: `${this.#frequencia}%`
        };
    }
}