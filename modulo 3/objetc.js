//object

const person ={
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
// chamando o atributo name do objeto person
console.log(person.name)

// interpolando atributos do objeto

console.log(`${person.name} tem ${person.age} anos.`)