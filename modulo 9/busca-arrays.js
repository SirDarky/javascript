/*
    Buscando e contando dados em Arrays

    Baseado no Array de Livros Por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categorias
        * Conta o número de autores
        * Mostrar livros do autor Auguto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como Enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalBooks = booksByCategory.length // contar o numero de categorias

for(let category of booksByCategory){ 
    console.log('Total de livros da categorias: ', category.category) // nome das caterias dos objetos
    console.log(category.books.length) // numero total de livros dentro dos objetos
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1) {  // condicional de "se o autor não estiver no array" faça :
                authors.push(book.author) // manda o nome do autor para o array
            }
        }
    }

    console.log("Total de autores: ", authors.length) // contando a quantidade de autor dentro do array authors[]
    
}
countAuthors();


function booksOfAugustoCury(author) {
    let books = [];

    for(let category of booksByCategory) { // category é os objetos
        for (let book of category.books) { // book é os arrays dentro dos objetos
            if(book.author === author){// procurando por arrays com o author compativel com oq foi escrito
                books.push(book.title) // mandando para o array "books[]" o titulo do livro
            }        
        }
    }

    console.log(`Livros do autor ${author} : ${books.join(", ")}`) //mostrando o autor e os livros o books.join é para separar eles
    
} // função para pegar os livros do autor Augusto Cury

booksOfAugustoCury('T. Harv Eker');