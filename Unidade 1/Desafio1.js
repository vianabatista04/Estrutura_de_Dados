//Cadastro e análise de alunos usando JavaScript

const prompt = require('prompt-sync')();
function calcularmedia(n1, n2, n3){
    return (n1+n2+n3)/3;
}

const quantidadeAlunosTexto = prompt("Quantos alunos serão cadastrados? ");
const quantidadeAlunos=Number(quantidadeAlunosTexto);
const listaAlunos = [];

let totalAprovados=0;
let totalRecuperacao=0;
let totalReprovados=0;

for (let i =1; i<=quantidadeAlunos; i++){
    const nome = prompt("Digite o nome do aluno: ");
    const matricula = prompt("Digite a matrícula do aluno: ");
    const n1 = Number(prompt("Digite a primeira nota: ").replace(",","."));
    const n2 = Number(prompt("Digite a segunda nota: ").replace(",","."));
    const n3 = Number(prompt("Digite a terceira nota: ").replace(",","."));
    const frequenciaTexto=prompt("Digite a frequência do aluno (%): ");
    const frequenciaAluno=Number(frequenciaTexto);
    const mediaAluno= calcularmedia(n1,n2,n3);

    let situacao;
    if (mediaAluno>=7 && frequenciaAluno>=75){
        situacao = "Aprovado";
        totalAprovados+=1;
    } else if (mediaAluno>=4 && frequenciaAluno>=75){
        situacao = "Recuperação";
        totalRecuperacao+=1;
    } else{
        situacao = "Reprovado";
        totalReprovados+=1;
    }
    listaAlunos.push({
        "Nº": i,
        Nome:nome,
        Matrícula: matricula,
        Média: mediaAluno.toFixed(2),
        Situação: situacao
    });
}
console.log("-----Cadastro e Análise dos Alunos-----");
listaAlunos.forEach((aluno,index) => {
    console.log(`Nome: ${aluno.Nome} | Matrícula: ${aluno.Matrícula} | Média: ${aluno.Média} | Situação: ${aluno.Situação}`);
});

console.table(listaAlunos);
console.log(`Aprovados: ${totalAprovados}`);
console.log(`Recuperação: ${totalRecuperacao}`);
console.log(`Reprovados: ${totalReprovados}`);