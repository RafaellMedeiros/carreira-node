import express from 'express'

import livros from './models/livros.js'
import router from './routes/index.js'

const app = express()

app.route(router(app))

app.get('/', (req, res) => {
    res.send('Ola Home')
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