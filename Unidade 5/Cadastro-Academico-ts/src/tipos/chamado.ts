export type StatusChamado = "ABERTO" | "EM_ATENDIMENTO" | "FINALIZADO"

export interface Chamado {
    readonly id: string;
    readonly matriculaEstudante: string;
    descricao: string;
    status: StatusChamado;
    readonly dataCriacao: Date;
};  