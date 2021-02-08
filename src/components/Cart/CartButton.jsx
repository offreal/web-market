import { useSelector } from 'react-redux'

import classes from './Cart.module.scss'
import { getCartAmountItems } from '../../redux/selectors/cartSelectors'

const CartButton = ({ showCartModal }) => {
  const amountItems = useSelector(getCartAmountItems)

  const counter = (
    <div className={classes.counter}>
      <span>{amountItems}</span>
    </div>
  )

  return (
    <button className={classes.cartButton} onClick={showCartModal}>
      {amountItems > 0 && counter}
      <i className="material-icons">shopping_cart</i>
    </button>
  )
}

export default CartButton
