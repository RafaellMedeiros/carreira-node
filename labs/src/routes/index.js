import express from 'express'
import product from './product.js'


const routes = (app) => {
  app.use(
    express.json(),
    product
  )
}

export default routes