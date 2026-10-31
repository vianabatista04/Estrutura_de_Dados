import type{ Chamado, StatusChamado } from "../tipos/chamado.js";
const bancoChamados:Chamado[]=[];
export function criarChamado(id: string, matriculaEstudante: string, descricao: string): Chamado{
    const novoChamado: Chamado={
        id,
        matriculaEstudante,
        descricao,
        status: "ABERTO",
        dataCriacao:new Date()
    };
    bancoChamados.push(novoChamado)
    return novoChamado;
}
export function atualizarStatusChamado(id:string, novoStatus: StatusChamado): Chamado | null{
    const chamado=bancoChamados.find((c) => c.id === id);
    if (!chamado){
        return null;
    }
    chamado.status=novoStatus;
    return chamado;
}