import { instance } from './config'

class Products {
  static async getProducts() {
    try {
      const { data } = await instance.get('products')

      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getProduct(productId) {
    try {
      const { data } = await instance.get(`products/${productId}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default Products
