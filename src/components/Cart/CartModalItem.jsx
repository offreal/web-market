import { Link } from 'react-router-dom'

import classes from './Cart.module.scss'

const CartModalItem = ({
  id,
  img,
  name,
  price,
  amount,
  closeHandler,
  removeHandler,
  increaseHandler,
  decreaseHandler,
}) => {
  return (
    <li className={`collection-item ${classes.collectionItem}`}>
      <div className={classes.leftColumn}>
        <Link to={`/products/${id}`} onClick={closeHandler}>
          <img src={img} alt={name} />
        </Link>
      </div>

      <div className={classes.rightColumn}>
        <Link to={`/products/${id}`} onClick={closeHandler}>
          <h6>{name}</h6>
        </Link>

        <div className={classes.price}>
          <div className={classes.amount}>
            <button onClick={decreaseHandler}>-</button>
            <span>{amount}</span>
            <button onClick={increaseHandler}>+</button>
          </div>
          x <span>${price}</span>
        </div>

        <div>
          <button className="btn red lighten-2" onClick={removeHandler} title="Remove from cart">
            <i className="material-icons left">remove_shopping_cart</i>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartModalItem
