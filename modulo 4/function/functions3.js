// Function scope
let subject= 'create video'
function createThink(subject) {
    subject= 'study'
    return subject
}

console.log(subject)
createThink()
console.log(subject)