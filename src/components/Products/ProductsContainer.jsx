import classes from './Products.module.scss'

import useProducts from '../../hooks/useProducts'
import useCartItem from '../../hooks/useCartItem'
import Preloader from '../common/Preloader'
import Products from './Products'
import ProductCard from './ProductCard'
import normalizePrice from '../../utils/normalizePrice'

const ProductsContainer = () => {
  const { isFetching, productsData } = useProducts()
  const { cartItems, addItemToCart } = useCartItem()

  if (isFetching) {
    return <Preloader />
  }

  const addItemToCartHandler = (productId) => () => {
    addItemToCart(productId)
  }

  const productItems =
    productsData.length > 0 ? (
      productsData.map(({ id, name, img, price }) => {
        const hasInCartItems = cartItems.some((item) => item.productId === id)

        return (
          <ProductCard
            key={id}
            name={name}
            img={img}
            price={normalizePrice(price)}
            productId={id}
            alreadyInCart={hasInCartItems}
            addItemToCart={addItemToCartHandler(id)}
          />
        )
      })
    ) : (
      <p>No products found</p>
    )

  return (
    <div className={classes.products}>
      <Products productItems={productItems} />
    </div>
  )
}

export default ProductsContainer
