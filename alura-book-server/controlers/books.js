import BooksRepository from "../service/booksRepository.js"


export const getBooks = (req, res) => {
    const books = BooksRepository.getAll()
    return res.json(books)
}

export const updateBooks = (req, res) => {
    const { id } = req.params
    const { name, img } = req.body

    BooksRepository.update(id, { name, img })
    return res.status(204).send()
}

export const deleteBooks = (req, res) => {
    const { id } = req.params
    
    BooksRepository.delete(id)
    return res.status(204).send()
}

export const createBooks = (req, res) => {
    const { name, img } = req.body

    BooksRepository.create({ name, img })
    return res.status(201).json({ message: 'Livro criado com sucesso' })
}