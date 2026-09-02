// Projeto Simples: Cálculo de Média e Situação do Aluno.

//Importação de biblioteca para que o prompt se torne uma função
const prompt = require('prompt-sync')();

// Lê nome do aluno
const nomeAluno = prompt("Digite nome do aluno:"); 
// Lê quantas notas serão adicionadas e tranforma em número
const quantidadeNotasTexto = prompt("Quantas notas deseja informar?");
const quantidadeNotas = Number(quantidadeNotasTexto);
// Declara variável para acumular as notas
let somaNotas = 0;

//Laço para ler cada nota
for (let i = 1; i <= quantidadeNotas; i++){
    // Lê nota i como texto
    const notaTexto = prompt(`Digite a nota ${i}:`);
    //Converte a nota i para número
    const nota = Number(notaTexto);
    //Atualiza a soma com a nota adicionada
    somaNotas=somaNotas+nota;
}

//Calcula a média
const mediaAluno = somaNotas/quantidadeNotas;
//Lê a frequência do aluno em porcentagem
const frequenciaTexto = prompt("Digite a frequência (%):");
const frequenciaAluno = Number(frequenciaTexto);

//Determinação da situação do aluno com condicional
let situacao;
if (mediaAluno >= 7 && frequenciaAluno >= 75){
    situacao = "Aprovado";
} else if (mediaAluno >= 4 && frequenciaAluno >= 75){
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

//Exibe um relatório resumido no console
console.log("----- Relatório do Aluno -----");
console.log("Nome:", nomeAluno);
console.log("Média:", mediaAluno.toFixed(2));
console.log("Frequência:", frequenciaAluno + "%");
console.log("Situação:", situacao);
