//Sistema de cadastro de cursos em memória usando array de objetos.
const cursos=[];
function criarCursos(codigo, nome, cargaHoraria, ativo){
    return {
        codigo: codigo,
        nome: nome,
        cargaHoraria: cargaHoraria,
        ativo: ativo
    };
}

function inserirCursos(cursos, curso){
    cursos.push(curso);
}

function listarCursos(cursos){
    for (const curso of cursos){
        console.log(`${curso.codigo}-${curso.nome} (${curso.cargaHoraria}h) - Ativo: ${curso.ativo}`);
    }
}

function filtrarCursosAtivos(cursos){
    return cursos.filter((curso)=>{
        return curso.ativo===true;
    });
}

function calcularMediaCargaHoraria(cursosAtivos){
    if (cursosAtivos.length===0){
        console.log("Nenhum curso cadastrado.");
        return;
    }
    const somaCargaHoraria=cursosAtivos.reduce((acumulador, curso)=>{
        return acumulador+curso.cargaHoraria;
    },0);
    const media = somaCargaHoraria/cursosAtivos.length;
    console.log(`Média da carga horária dos cursos ativos: ${media.toFixed(2)}h`);
}

inserirCursos(cursos, criarCursos("JS "," JavaScript",30, true));
inserirCursos(cursos, criarCursos("POO "," Java",60, false));
inserirCursos(cursos, criarCursos("g++ ", " C++",60,true));

console.log("-------- Lista de Cursos --------");
listarCursos(cursos);
const ativos= filtrarCursosAtivos(cursos);
console.log("\n--- Resumo de Médias ---");
calcularMediaCargaHoraria(ativos);