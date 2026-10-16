export class Chamado{
    static STATUS = Object.freeze({
        ABERTO: 'ABERTO',
        EM_ATENDIMENTO: 'EM_ATENDIMENTO',
        FINALIZADO: 'FINALIZADO'
    });
    #id;
    #titulo;
    #solicitante;
    #responsavel;
    #status;
    
    constructor(id, titulo, solicitante){
        this.#id=id;
        this.#titulo=titulo;
        this.#solicitante=solicitante;
        this.#responsavel=null;
        this.#status=Chamado.STATUS.ABERTO;
    }
    get id() {return this.#id;}
    get titulo() {return this.#titulo;}
    get status() {return this.#status;}
    get solicitante() {return this.#solicitante;}
    get responsavel() {return this.#responsavel;}
    
    atender(responsavel){
        if (this.#status !== Chamado.STATUS.ABERTO){
            throw new RangeError(`Erro: O chamado #${this.id} não pode ser atendido pois seu status atual é '${this.status}'.`);
        }
        if (!responsavel){
            throw new RangeError(`É preciso ter um responsável pra atender o chamado.`);
        }
        this.#responsavel=responsavel;
        this.#status=Chamado.STATUS.EM_ATENDIMENTO;
        console.log(`Chamado #${this.id} está em atendimento por ${this.responsavel}.`)
    }
    finalizar(){
        if (this.#status !== Chamado.STATUS.EM_ATENDIMENTO){
            throw new RangeError(`Erro: O chamado #${this.id} não pode ser finalizado se não estiver em andamento (status atual: '${this.status}').`);
        }
        this.#status=Chamado.STATUS.FINALIZADO;
        console.log(`Chamado #${this.id} foi finalizado.`);
    }
    obterResumo(){
        return{
            id: this.#id,
            titulo:this.#titulo,
            solicitante:this.#solicitante ? this.#solicitante.nome: 'Não informado',
            matriculaSolicitante: this.#solicitante ? this.#solicitante.matricula: 'N/A',
            responsavel: this.#responsavel || 'Não Atribuído',
            status: this.#status
        }
    }
};
