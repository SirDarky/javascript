/*

    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * Receitas:[]
        * Despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/

let familia = {
    receitas: [2100, 1300, 3000],
    gastos: [400, 1000, 500, 250, 10000]
}

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculo() {
    const calculoReceita = sum(familia.receitas)
    const calculoGastos = sum(familia.gastos)

    const total= calculoReceita - calculoGastos
    if (total>= 0) {
        console.log('Tá tudo bem')
        console.log('Seu saldo é de: R$' + total.toFixed(2))
    } else {
        console.log('Não tá tudo bem')
        console.log('Seu saldo é de: R$' + total.toFixed(2))
    }
}
calculo()