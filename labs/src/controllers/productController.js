import Log from "../help/log.js"
import response from "../help/response.js"

const products = [
  {
    id: 1,
    name: 'coca'
  },
  {
    id: 2,
    name: 'doce'
  },
  {
    id: 3,
    name: 'bolo'
  },
]

export default class ProductController {
  static getProduct(req, res) {
    const { id } = req.params

    if (!id) {
      Log.warn(ProductController, 'id não informado')
      return response(res, { body: { message: 'id não informado' } })
    }

    const productIndex = products.findIndex(pd => pd.id === Number(id))
    if (productIndex === -1) {
      Log.warn(ProductController, `Não foi encontrado produto com o id: ${id}`)
      return response(res, { status: 404, body: { message: 'Produto não encontrado' } })
    }

    const product = products[productIndex]
    return response(res, { body: { product } })
  }

  static updateProduct(req, res) {
    res.status(200).json({ message: 'GET PRODUCT' })
  }

  static createProduct(req, res) {
    res.status(200).json({ message: 'GET PRODUCT' })
  }

  static deleteProduct(req, res) {
    res.status(200).json({ message: 'GET PRODUCT' })
  }

  static getAll(req, res) {
    res.status(200).json({ products })
  }
}