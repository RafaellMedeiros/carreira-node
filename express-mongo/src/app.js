import express from 'express'
import conectaNaDatabase from './config/dbConnect.js'

import livros from './models/livros.js'
const app = express()
app.use(express.json())

const conexao = await conectaNaDatabase()


app.get('/', (req, res) => {
    res.send('Ola Home')
})

app.get('/livros', async (req, res) => {
    const listaLivros = await livros.find();

    res.status(200).json(listaLivros)
});

app.post('/livro', (req, res) => {
    const { titulo, autor } = req.body
    const id = livros.length + 1
    const livro = { id, titulo, autor }
    livros.push(livro)
    res.status(201).send('Livro adicionado com sucesso')
})

app.get('/livro/:id', (req, res) => {
    const { id } = req.params
    const livro = buscarLivroPorId(id)
    if (livro) {
        res.status(200).json(livro)
    } else {
        res.status(404).send('Livro não encontrado')
    }
})

app.put('/livro/:id', (req, res) => {
    const { id } = req.params
    const { titulo, autor } = req.body
    const livro = buscarLivroPorId(id)
    if (livro) {
        livro.titulo = titulo
        livro.autor = autor
        res.status(200).json(livro)
    } else {
        res.status(404).send('Livro não encontrado')
    }
})


export default app