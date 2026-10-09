import express from 'express'
import ProductController from '../controllers/productController.js'
const router = express.Router()

router
  .get('/product', ProductController.getAll)
  .get('/product/:id', ProductController.getProduct)
  .post('/product', (req, res) => { res.json({ message: '[POST] /product' }) })
  .put('/product', (req, res) => { res.json({ message: '[PUT] /product' }) })
  .delete('/product', (req, res) => { res.json({ message: '[DELETE] /product' }) })

export default router