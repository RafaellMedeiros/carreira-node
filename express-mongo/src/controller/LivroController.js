import livros from '../models/livros.js'

class LivroController {
    static listarLivros = async (req, res) => {
        const listaLivros = await livros.find();

        res.status(200).json(listaLivros)
    }

    static criarLivro = async (req, res) => {
        const { titulo, autor } = req.body
        const livro = { titulo, autor }
        livros.create(livro)
        res.status(201).send('Livro adicionado com sucesso')
    }
}

export default LivroController