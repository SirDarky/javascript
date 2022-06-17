/*
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sitema de notas em caracteres tipo A B C

    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F

*/

let nota

function getScore(nota) {
    let score

if (nota>=90) {
    score = 'A'
} else if (nota >=80 && nota<90) {
    score = 'B'
} else if (nota <80 && nota>=70) {
    score = 'C'
} else if (nota <70 && nota>= 60) {
    score = 'D'
} else {
    score= 'F'
}
console.log(score)
}

getScore(100)
getScore(90)
getScore(80)
getScore(70)
getScore(60)
getScore(50)