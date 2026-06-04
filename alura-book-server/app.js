import express from 'express'
import routerBooks from './routers/books.js'

const app = express()

const PORT = 8000

app.use('/livros', routerBooks)

app.listen(PORT, () => {
    console.log('Servidor iniciado');
})