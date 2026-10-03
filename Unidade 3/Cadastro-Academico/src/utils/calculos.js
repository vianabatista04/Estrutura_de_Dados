export function calcularMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    return 0;
  }

  const total = notas.reduce((soma, nota) => soma + Number(nota), 0);
  return Number((total / notas.length).toFixed(2));
}

export function classificarMedia(media, mediaMinima = 6) {
  return media >= mediaMinima ? "APROVADO" : "REPROVADO";
}