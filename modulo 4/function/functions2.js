// function expression
// function anonymous

// parâmetros (parameters)
const sum= function(number1, number2) {
    let total= number1+number2 // tem que usar a palavra especial (let)
    return total
}

let number1 = 3
let number2 = 2
//sum(number1, number2) // arguments - argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)