import type { DadosEstudanteEntrada, ResultadoValidacao } from "../tipos/estudante.js";
export function validarEstudante(entrada: DadosEstudanteEntrada): ResultadoValidacao{
    const erros: string[]= [];
    if(typeof entrada.nome !== "string" || entrada.nome.trim()===""){
        erros.push("O nome tem que ser inserido e não pode ser vazio.");
    }
    if(typeof entrada.matricula !== "string" || entrada.matricula.trim()===""){
        erros.push("A matrícula tem que ser inserida e não pode ser vazia");
    }
    return{
        valido: erros.length===0,
        erros
    };
} 