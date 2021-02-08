import { Fragment } from 'react'
import { Redirect, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import classes from './OrderPage.module.scss'
import useCartItems from '../../hooks/useCartItems'
import OrderItem from './OrderItem'
import normalizePrice from '../../utils/normalizePrice'
import { makeOrderRequest } from '../../redux/actions/cartActions'
import Preloader from '../common/Preloader'
import Breadcrumbs from '../common/Breadcrumbs'

const OrderPage = () => {
  const {
    cartItems,
    cartProduct,
    cartProducts,
    removeItemFromCart,
    discardAllItems,
  } = useCartItems()
  const history = useHistory()
  const successOrder = useSelector((state) => state.cart.successOrder)
  const orderIsFetching = useSelector((state) => state.cart.orderIsFetching)
  const dispatch = useDispatch()

  let totalAmount = 0
  let product = null

  if (!cartItems.length && !successOrder) {
    return <Redirect to="/" />
  }

  const showSuccessOrder = successOrder && !orderIsFetching

  const removeItemHandler = (productId) => () => {
    removeItemFromCart(productId)
  }

  const discardItemsHandler = () => {
    const confirmDiscard = window.confirm('Are you sure want to cancel your order?')

    if (confirmDiscard) {
      discardAllItems()
    }
  }

  const orderHandler = () => {
    const getAmount = (id) => cartItems.find((item) => item.productId === id).amount
    const products = []

    if (cartProducts.length > 0) {
      cartProducts.forEach((product) => {
        const amount = getAmount(product.id)

        Array.from(Array(amount), () => products.push(product))
      })
    } else if (cartProduct) {
      const amount = getAmount(cartProduct.id)

      Array.from(Array(amount), () => products.push(cartProduct))
    }

    if (products.length > 0) {
      dispatch(makeOrderRequest(products))
    } else {
      history.push('/products')
    }
  }

  const formOrderItem = (product) => {
    if (cartItems.length < 1) {
      return null
    }

    const amount = cartItems.find((item) => item.productId === product.id).amount
    const price = normalizePrice(product.price)
    const totalPrice = normalizePrice(amount * product.price)
    totalAmount += amount * product.price

    return (
      <OrderItem
        key={product.id}
        name={product.name}
        img={product.img}
        price={price}
        amount={amount}
        category={product.category}
        totalPrice={totalPrice}
        removeHandler={removeItemHandler(product.id)}
      />
    )
  }

  const hasCartItemInProduct = cartItems.length && cartProduct
  const products = cartProducts.map(formOrderItem)

  if (cartProducts.length < 1 && hasCartItemInProduct) {
    product = formOrderItem(cartProduct)
  }

  const orderContent = (
    <Fragment>
      <div>
        <h3>Order #1213213</h3>
      </div>
      <ul className="collection">{products.length ? products : product}</ul>
      {orderIsFetching && <Preloader />}
      <hr />
      <div className={classes.control}>
        <div className={classes.totalPrice}>
          Total: <span>${totalAmount}</span>
        </div>
        <div>
          <button className="btn red darken-3" onClick={discardItemsHandler}>
            <i className="material-icons left">delete</i>
            Discard
          </button>
          <button className="btn green darken-1" onClick={orderHandler}>
            <i className="material-icons left">shopping_cart</i>
            Order Now
          </button>
        </div>
      </div>
    </Fragment>
  )

  const orderSuccessContent = (
    <Fragment>
      <h4>Thanks!</h4>
      <div>Your order was placed</div>
    </Fragment>
  )

  const breadcrumbsData = [
    { id: 1, name: 'Products', link: '/products' },
    { id: 2, name: 'Order page', link: null },
  ]

  return (
    <div className={classes.orderPage}>
      <Breadcrumbs breadcrumbsData={breadcrumbsData} />
      {showSuccessOrder ? orderSuccessContent : orderContent}
    </div>
  )
}

export default OrderPage
