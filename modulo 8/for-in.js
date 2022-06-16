// for...in

let person = {
    name: 'Marcus',
    age: 20,
    weight: 107.2,
}

for(let property in person) {
    console.log(property) // dirá a propriedade do momento ( name, age, weight)
    console.log(person[property]) // dirá o valor da propriedade do momento ('Marcus', 20, 107.2)
}