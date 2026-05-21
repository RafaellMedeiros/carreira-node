import express from 'express'

const router = express.Router()

router
    .get('/user/:id', (req, res) => { res.send('Bateu em User ID') })
    .get('/users', (req, res) => { res.send('Bateu só em users') })

export default router