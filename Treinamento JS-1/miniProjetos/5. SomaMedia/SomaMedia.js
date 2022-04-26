//Objetivo: Obter as notas do array, calcular a média, e dar a classificação -> A, B, C ... F
const notas = [100, 93, 58]

console.log(`Nota do aluno:${mediaAluno(notas)}`)

function mediaAluno(todasNotas) {
    
    let classif, resultado;

    resultado = calcularMedia(todasNotas);

    (resultado >= 90 && resultado <= 100 ) ? classif = 'A' : (resultado >= 80) ? classif = 'B' : 
    (resultado >= 70) ? classif = 'C' : (resultado >= 60) ? classif = 'D' : (resultado >= 0) ? classif = 'F': console.log('Erro!');

    return ` ${resultado} | Classificação: ${classif} `
    
}

function calcularMedia(valores) {
    
    let soma = 0;

    for (const num in valores) {
        
        soma += valores[num];

    }/*Usando for of -> for(let nota of notas){soma += nota}*/

    return (soma/(valores.length))

}