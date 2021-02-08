// import { instance } from "./config"

class Order {
  static async purchase(products) {
    try {
      // const request = await instance.post('purchase', { products })
      /*
        http://167.172.186.154/api/purchase
        * This endpoint does not work
      */
      await new Promise((resolve) => setTimeout(() => resolve(), 4000))

      return products
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default Order
