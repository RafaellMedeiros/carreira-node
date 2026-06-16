import express from 'express'
import routerBooks from './routers/books.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const PORT = 8000

app.use('/livros', routerBooks)

app.listen(PORT, () => {
    console.log('Servidor iniciado');
})