export interface Estudante {
    readonly id: string | number;
    readonly matricula: string;
    nome: string;
    curso: string;
    ativo: boolean;
    notas?: number[];
};

export type CriarAlunoParams = {
  id: string | number;
  matricula: string;
  nome: string;
  curso: string;
  ativo: boolean;
  notas?: number[];
};

export type ResultadoValidacao={
    valido: boolean;
    erros: string[];
};

export type DadosEstudanteEntrada={
    id?:unknown;
    matricula?:unknown
    nome?:unknown;
    curso?:unknown;
    ativo?:unknown;
};
