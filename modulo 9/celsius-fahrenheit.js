/*
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outras

    C = (F-32) * 5/9
    F = C*9/5 + 32
*/

function transformToDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrExist = degree.toUpperCase().includes('F')


    if(!celsiusExist && !fahrExist) {
        throw new Error('Grau não identificado')
    } else if(!fahrExist){
        let temperatureCelsius = Number(degree.toUpperCase().replace("C", ""))
        celToFarh(temperatureCelsius)
    } else {
        let temperatureFarh = Number(degree.toUpperCase().replace("F", ""))
        fahrToCel(temperatureFarh)
    }
}

let degreeSign

function celToFarh(celsius) {
    let temp1= Number(celsius) * 9/5 +32
    degreeSign = 'F'
    let total1 = temp1.toFixed(2)
    total1 += degreeSign
    console.log(total1)
}

function fahrToCel(fahr) {
    let temp2 = (Number(fahr)-32) * 5/9
    degreeSign = 'C'
    let total = temp2.toFixed(2)
    total += degreeSign
    console.log(total)
}

try {
    transformToDegree('50 c')
} catch (error) {
    console.log(error.message)
}

transformToDegree('100 f')