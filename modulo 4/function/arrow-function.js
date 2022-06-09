// arrow function

/*
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Mayk')
*/
// callback function

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)