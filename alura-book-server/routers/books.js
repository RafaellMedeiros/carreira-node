import {Router} from 'express'
import { 
    createBooks, 
    deleteBooks, 
    getBooks, 
    updateBooks 
} from '../controlers/books.js'

const router = Router()

router.get('/', getBooks)
router.put('/:id', updateBooks)
router.delete('/:id', deleteBooks)
router.post('/', createBooks)

export default router