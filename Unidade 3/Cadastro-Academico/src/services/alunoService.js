import { criarAluno } from "../models/aluno.js";
import * as AlunoRepository from "../repositories/alunoRepository.js";
import { calcularMedia, classificarMedia } from "../utils/calculos.js";
import {
  validarDadosDoAluno,
  normalizarDadosDoAluno,
} from "../utils/validacoes.js";

export function cadastrarAluno(dados) {
  const dadosNormalizados = normalizarDadosDoAluno(dados);
  const erros = validarDadosDoAluno(dadosNormalizados);

  if (erros.length > 0) {
    return {
      sucesso: false,
      erros,
      aluno: null,
    };
  }

  const alunoExistente = AlunoRepository.buscarPorMatricula(
    dadosNormalizados.matricula
  );

  if (alunoExistente) {
    return {
      sucesso: false,
      erros: ["Já existe aluno com essa matrícula."],
      aluno: null,
    };
  }

  const aluno = criarAluno({
    id: AlunoRepository.obterProximoId(),
    ...dadosNormalizados,
  });

  AlunoRepository.salvar(aluno);

  return {
    sucesso: true,
    erros: [],
    aluno: adicionarSituacao(aluno),
  };
}

export function listarAlunosComSituacao(mediaMinima = 6) {
  return AlunoRepository.listarTodos().map((aluno) => adicionarSituacao(aluno, mediaMinima)
  );
}

export function removerAluno(matricula) {
  return AlunoRepository.removerPorMatricula(matricula);
}

export function adicionarSituacao(aluno, mediaMinima = 6) {
  const media = calcularMedia(aluno.notas);

  return {
    ...aluno,
    media,
    situacao: classificarMedia(media, mediaMinima),
  };
}

export function buscarAlunoPorMatricula(matricula,mediaMinima = 6){
    const aluno = AlunoRepository.buscarPorMatricula(matricula);
    return aluno ? adicionarSituacao(aluno, mediaMinima) : null;
}

export function gerarRelatorio(alunos, filtrar, formatar, comparar){
    if (!Array.isArray(alunos) || alunos.length === 0){
        return [];
    }
    let resultado = typeof filtrar === "function" ? alunos.filter(filtrar) : [...alunos];
    if (typeof comparar === "function"){
        resultado.sort(comparar);
    }
    if (typeof formatar === "function"){
        return resultado.map(formatar);
    }
    return resultado;
}

export function criarFiltroPorMediaouCurso(tipo, valor){
    if (tipo === "media"){
        return (aluno) => aluno.media >= valor;
    }
    if (tipo === "curso"){
        const cursoAlvo= String(valor ?? "").trim().toUpperCase();
        return (aluno) => aluno.curso === cursoAlvo;
    }
    return () => true;     
}

export function gerarRelatorioAprovadosPorNome(mediaMinima=6){
    const alunos = listarAlunosComSituacao(mediaMinima);
    const filtrarAprovados = (aluno)=> aluno.situacao === "APROVADO";
    const compararPorNome = (a,b) => a.nome.localeCompare(b.nome);
    return gerarRelatorio(alunos, filtrarAprovados, null, compararPorNome);
}

export function gerarRelatorioReprovadosPorMedia(mediaMinima=6){
    const alunos = listarAlunosComSituacao(mediaMinima);
    const filtrarReprovados = (aluno)=> aluno.situacao === "REPROVADO";
    const compararPorMedia = (a,b) => a.media - b.media;
    return gerarRelatorio(alunos, filtrarReprovados, null, compararPorMedia);
}

export function gerarRelatorioCursoCSV(curso, mediaMinima=6){
    const alunos = listarAlunosComSituacao(mediaMinima);
    const filtrarCurso = criarFiltroPorMediaouCurso("curso", curso);
    const formatar = (aluno) => 
        `${aluno.matricula};${aluno.nome};${aluno.email};${aluno.curso};${aluno.media};${aluno.situacao}`;
    return gerarRelatorio(alunos, filtrarCurso, formatar, null);
}

export function gerarResumoPorCurso(){
    const alunos = listarAlunosComSituacao();
    if (alunos.length===0){
        return [];
    }
    const mapaCursos=new Map();
    for (const aluno of alunos){
        if (!mapaCursos.has(aluno.curso)){
            mapaCursos.set(aluno.curso, {quantidade: 0, somaMedias:0});
        }
        const dadosCurso=mapaCursos.get(aluno.curso);
        dadosCurso.quantidade += 1;
        dadosCurso.somaMedias += aluno.media;
    }
    const resumo=[];
    for (const [curso, dados] of mapaCursos.entries()){
        const mediaGeral = Number((dados.somaMedias/dados.quantidade).toFixed(2));
        resumo.push({
            curso,
            quantidadeAlunos: dados.quantidade,
            mediaGeral,
        });
    }
    return resumo;
}