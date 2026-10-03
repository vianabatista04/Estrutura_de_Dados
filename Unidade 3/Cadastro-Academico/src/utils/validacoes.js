export function normalizarDadosDoAluno(dados) {
  return {
    ...dados,
    matricula: String(dados.matricula ?? "").trim(),
    nome: String(dados.nome ?? "").trim(),
    email: String(dados.email ?? "").trim().toLowerCase(),
    curso: String(dados.curso ?? "TADS").trim().toUpperCase(),
    notas: Array.isArray(dados.notas) ? [...dados.notas] : [],
  };
}

export function validarDadosDoAluno(dados) {
  const erros = [];

  if (dados.matricula.length < 4) {
    erros.push("A matrícula deve possuir pelo menos 4 caracteres.");
  }

  if (dados.nome.length < 3) {
    erros.push("O nome deve possuir pelo menos 3 caracteres.");
  }

  if (!emailEhValido(dados.email)) {
    erros.push("O e-mail informado é inválido.");
  }

  if (dados.notas.length===0){
    erros.push("O aluno deve ter pelo menos uma nota cadastrada.");
  }else{
    const notasValidas=dados.notas.every(
        (nota) => typeof nota === "number" && !isNaN(nota)&& nota>=0 && nota<=10
    );
    if (!notasValidas) {
        erros.push("Todas as notas devem estar entre 0 e 10."); 
    }
  }
  return erros;
}

function normalizarTexto(texto) {
  return String(texto ?? "").trim();
}

function emailEhValido(email) {
    const emailLimpo=normalizarTexto(email);
    const regexEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(emailLimpo);
}