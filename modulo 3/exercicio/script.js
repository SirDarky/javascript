// 1. Declare uma variável de nome weight
//let weight
// 2. que tipo de dado é a variável acima?
//console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscriber: Boolean
        
*/
/*let name = 'Marcus'
let age = 19
let stars = 1.5
let isSubscriber = false
*/


/*

    4. A variável student abaixo é de que tipo de dado?
        objeto
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
let student = {
    name: 'Marcus',
    age: 19,
    weight: 110.5,
    isSubscriber: false
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students=[]

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto, mas usar o objeto criado e inserir ele no array)
*/
students= [
    student
]
/*
    7. Coloque no console o valor da posição zero do Array acima 
*/
console.log(students[0])
/* 8. Crie um novo student e coloque na posição 1 do Array students
*/
const john= {
    name: "John",
    age: 21,
    weight: 90,2,
    isSubscriber: true
}
students[1] = john
