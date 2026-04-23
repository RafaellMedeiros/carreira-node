import express from 'express'
import conectaNaDatabase from './config/dbConnect.js'

const app = express()
app.use(express.json())

const database = await conectaNaDatabase()
console.log(await database.collection('admin').findOne());
const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien'
    },
    {
        id: 2,
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J.K. Rowling'
    }
]

const buscarLivroPorId = (id) => {
    return livros.find(livro => livro.id === Number(id))
}

app.get('/', (req, res) => {
    res.send('Ola Home')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
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