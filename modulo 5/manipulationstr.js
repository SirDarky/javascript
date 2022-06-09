// Manipulando strings e número

// Transformar String em Número e Número em String

let string= "123"
console.log(Number(string)) // transformou uma string em number
let number = 321
console.log(String(number)) // transformou um number em string

//contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 5412312.241321
console.log(number.toFixed(2).replace(".",","))

// Transformar letras minúsculas em maiúsculas. Faça o contrario disso também

let word = "Programar é muito daora!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") // coloca em array toda palavra
let phraseWithUnderscore = myArray.join("_") // transforma o array em frase e colocar o "_" separando eles
console.log(phraseWithUnderscore.toLowerCase()) 

// Criar array com construtor

let Arraycomum = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elemento de um array
console.log(["a", {type: "array"}, function() {return "alo"}].length)
console.log(["a", {type: "array"}, function() {return "alo"}][1].type)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))