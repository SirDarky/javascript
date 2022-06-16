// Throw

function sayMyName(name = '') {
    if (name === ''){
        throw ("Nome é obrigatório")
    }
    
    console.log('depois do erro')
}

// Try... catch

try {

} catch(e) {
    console.log(e)
}