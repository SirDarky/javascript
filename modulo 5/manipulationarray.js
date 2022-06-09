// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")        
// Adicionar no começo
techs.unshift("sql")
// Remover do fim
techs.pop()
// Remover do começo
techs.shift()
// Pegar somente alguns elementos do array
//console.log(techs.slice(1,2))
// remover 1 ou mais items em qualquer posição do array
//techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf("html")
techs.splice(index,1)

console.log(techs)