//Sistema de cadastro de alunos em memória
const cadastros = [];
function criarAluno(matricula, nome, curso, notas){
    return{
        matricula: matricula,
        nome: nome,
        curso: curso,
        notas: notas
    };
}

function inserirAlunos(cadastros, aluno){
    cadastros.push(aluno);
}
function listarAlunos(cadastros){
    for (const aluno of cadastros){
        console.log(`${aluno.matricula}-${aluno.nome} (${aluno.curso})`);
    }
}
function buscarAlunoPorMatricula(cadastros, matricula){
    return cadastros.find((aluno)=> aluno.matricula === matricula);
}

function gerarResumoMedias(cadastros){
    if (cadastros.length===0){
        console.log("Nenhum aluno cadastrado.");
        return;
    }
    const medias=cadastros.map((aluno)=>{
    let soma = 0;
    for (const nota of aluno.notas){
        soma=soma+nota;
    }
    return soma/aluno.notas.length;
});
const somaMedias=medias.reduce((acumulador, media)=>{
    return acumulador + media;
}, 0);
const mediaGeral=somaMedias/medias.length;
const maiorMedia=Math.max(...medias);
const menorMedia=Math.min(...medias);

console.log("Quantidade de alunos:", cadastros.length);
console.log("Média geral das médias:", mediaGeral.toFixed(2));
console.log("Maior média:", maiorMedia.toFixed(2));
console.log("Menor média:", menorMedia.toFixed(2));
}

inserirAlunos(cadastros, criarAluno("2026-ADS-001", "Ana", "TADS", [8.0,7.5,9.0]));
inserirAlunos(cadastros, criarAluno("2026-ADS-002", "Bruno", "TADS", [6.0,5.5,7.0]));
inserirAlunos(cadastros, criarAluno("2026-ADS-003", "Carla", "Redes", [7.5,8.0,6.5]));

listarAlunos(cadastros);
const alunoBuscado=buscarAlunoPorMatricula(cadastros, "2026-ADS-002");
console.log("Aluno buscado:", alunoBuscado);
gerarResumoMedias(cadastros);