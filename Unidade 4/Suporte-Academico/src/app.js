import {configuracao} from './config/configuracao.js';
import {Estudante} from "./models/Estudante.js";
import { Turma } from './models/Turma.js';
import { Chamado } from "./models/Chamado.js";
import { FilaAtendimento } from './models/FilaAtendimento.js';

console.log(`=== SISTEMA DE SUPORTE ACADÊMICO === \n`);

const aluno1 = new Estudante('2026004', 'Maria Silva', 'TADS');
const aluno2 = new Estudante('2026010', 'João Silva', 'TADS');
aluno1.adicionarNota(8.5);
aluno1.adicionarNota(9.5);
try{    //Testar o erro sem dar erro
    aluno1.adicionarNota(16.5);
} catch (error){
    console.error(`[Tratamento de exceção]: ${error.message}`);
} 
aluno2.adicionarNota(5.5);
aluno2.adicionarNota(8.5);
aluno2.adicionarNota(7.0);  

console.log(`Resumo Aluno 1:`, aluno1.obterResumo() );
console.log(`Resumo Aluno 2:`, aluno2.obterResumo() );

console.log('=== TURMAS ===');
const turmaTopicos=new Turma('T01-2026', 'Tópicos Avançados de Computação');
turmaTopicos.matricularEstudante(aluno1);
turmaTopicos.matricularEstudante(aluno2);
console.log('Resumo da Turma:', turmaTopicos.obterResumo());

console.log('=== FILA DE CHAMADOS E ATENDIMENTOS ===');
const chamado1 = new Chamado(1, 'Problema no acesso do portal', aluno1);
const chamado2 = new Chamado(2, 'Solicitação de trancamento', aluno2);

const fila = new FilaAtendimento();
fila.adicionar(chamado1);
fila.adicionar(chamado2);
console.log(`Tamanho da fila: ${fila.tamanho}`);
console.log(`Relatório da fila:`, fila.relatorioFila());

console.log('=== PROCESSAMENTO DE ATENDIMENTOS ===');
const proximo =fila.retirarProximo();
console.log('Chamado retirado da fila:', proximo.obterResumo());

proximo.atender('Prof. Guilherme');
console.log('Status após atender:', proximo.status);
proximo.finalizar();    
console.log('Status após finalizar:', proximo.status);
