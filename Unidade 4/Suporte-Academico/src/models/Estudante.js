export class Estudante{
    #matricula;
    #nome;
    #curso;
    #notas=[]
    constructor(matricula, nome, curso){
        this.#matricula=matricula;
        this.#nome=nome;
        this.#curso=curso;
    }
    get matricula(){return this.#matricula;}
    get nome(){return this.#nome;}
    get curso(){return this.#curso;}
    
    adicionarNota(nota){
        const valorNota=Number(nota);
        if(Number.isNaN(valorNota) || nota < 0 || nota > 10 || nota === '' || nota===null){
            throw new RangeError("A nota deve estar entre 0 e 10.");
        }
        this.#notas.push(valorNota);
    }
    calcularMedia(){
        if(this.#notas.length === 0){
            return 0;
        }
        const total = this.#notas.reduce((soma, nota) => soma + nota, 0);
        return total/ this.#notas.length;
    }
    listarNotas(){
        return [...this.#notas];
    }
    obterResumo(){
        return{
            matricula: this.#matricula,
            nome: this.#nome,
            curso: this.#curso,
            media: this.calcularMedia(),
            totalNotas: this.#notas.length
        };
    }
}




