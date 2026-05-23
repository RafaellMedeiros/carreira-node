import express from 'express'
import { UserController } from '../controllers/userController.js'

const router = express.Router()

router
    .post('/user', UserController.create)
    .get('/users', UserController.list)

export default router