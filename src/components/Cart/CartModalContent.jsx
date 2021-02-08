import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import classes from './Cart.module.scss'
import normalizePrice from '../../utils/normalizePrice'
import CartModalItem from './CartModalItem'
import useCartItems from '../../hooks/useCartItems'

const CartModalContent = ({ closeHandler }) => {
  const {
    cartItems,
    cartProduct,
    cartProducts,
    removeItemFromCart,
    increaseAmountItemForCart,
    decreaseAmountItemForCart,
  } = useCartItems()

  let totalAmount = 0
  let product = null

  const removeItemFromCartHandler = (productId) => () => {
    removeItemFromCart(productId)
  }

  const increaseAmountItemForCartHandler = (productId) => () => {
    increaseAmountItemForCart(productId)
  }

  const decreaseAmountItemForCartHandler = (productId) => () => {
    decreaseAmountItemForCart(productId)
  }

  const formCartItem = (product) => {
    if (cartItems.length < 1) {
      return null
    }

    const amount = cartItems.find((item) => item.productId === product.id).amount
    const price = normalizePrice(product.price)
    totalAmount += amount * product.price

    return (
      <CartModalItem
        key={product.id}
        id={product.id}
        img={product.img}
        name={product.name}
        price={price}
        amount={amount}
        closeHandler={closeHandler}
        removeHandler={removeItemFromCartHandler(product.id)}
        increaseHandler={increaseAmountItemForCartHandler(product.id)}
        decreaseHandler={decreaseAmountItemForCartHandler(product.id)}
      />
    )
  }

  const hasCartItemInProduct = cartItems.length && cartProduct
  const products = cartProducts.map(formCartItem)

  if (cartProducts.length < 1 && hasCartItemInProduct) {
    product = formCartItem(cartProduct)
  }

  const emptyCart = (
    <div className="modal-content">
      <h5 className="center">Your shopping cart is empty</h5>
    </div>
  )

  const contentCart = (
    <Fragment>
      <div className="modal-content">
        <ul className="collection">{products.length ? products : product}</ul>
      </div>
      <hr />
      <footer className={`modal-footer ${classes.modalFooter}`}>
        <div className={classes.totalPrice}>
          Total: <span>${normalizePrice(totalAmount)}</span>
        </div>
        <Link className="btn green" to="/order" onClick={closeHandler}>
          <i className="material-icons left">shopping_cart</i>
          <span>Order now</span>
        </Link>
      </footer>
    </Fragment>
  )

  if (cartProducts.length > 0 || hasCartItemInProduct) {
    return contentCart
  }

  return emptyCart
}

export default CartModalContent
