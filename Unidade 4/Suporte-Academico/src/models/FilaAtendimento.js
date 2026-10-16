export class FilaAtendimento{
    #chamados=[]

    adicionar(chamado){
        if(!chamado) return false;
        this.#chamados.push(chamado);
        return true;
    }
    retirarProximo(){
        if(this.tamanho===0){
            return null;
        }
        return this.#chamados.shift();
    }
    get tamanho(){
        return this.#chamados.length;
    }
    relatorioFila(){
        return this.#chamados.map(chamado => chamado.obterResumo());
    }
}