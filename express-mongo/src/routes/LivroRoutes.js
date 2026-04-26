import LivroController from '../controller/LivroController.js'
import express from 'express'

const router = express.Router()

router.get('/livros', LivroController.listarLivros)
router.post('/livro', LivroController.criarLivro)

export default router