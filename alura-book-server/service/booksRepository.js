import fs from 'fs'

export default class BooksRepository {

    static getAll() {
        return JSON.parse(fs.readFileSync('./books.json'));
    }

    static create(book) {
        const { nama, img } = book

        try {
            const getAllBooks = this.getAll()
    
            const id = getAllBooks.length + 1
            getAllBooks.push({ id, nama, img })
            fs.writeFileSync('./books.json', JSON.stringify(getAllBooks))
            return true
        } catch (error) {
            console.error('Não foi possivel salvar o livro', error);
            return false
        }
    }

    static delete(bookId) {
        try {
            const getAllBooks = this.getAll()

            const index = getAllBooks.findIndex((book) => book.id === bookId)
            
            if (index === -1) {
                return false
            }

            getAllBooks.splice(index, 1)
            fs.writeFileSync('./books.json', JSON.stringify(getAllBooks))
            return true
        } catch (error) {
            console.error('Não foi possivel deletar o livro', error);
            return false
        }
    }

    static update(id, book) {
        try {
            const getAllBooks = this.getAll()

            const index = getAllBooks.findIndex((book) => book.id === id)
            
            if (index === -1) {
                return false    
            }

            const { nama, img } = book
            getAllBooks[index] = { id, nama, img }
            fs.writeFileSync('./books.json', JSON.stringify(getAllBooks))
            return true
        } catch (error) {
            console.error('Não foi possivel atualizar o livro', error);
            return false
        }
    }
}