import IconButton from '../common/IconButton'
import classes from './OrderPage.module.scss'

const OrderItem = ({ name, img, price, amount, category, totalPrice, removeHandler }) => {
  return (
    <li className={`collection-item ${classes.collectionItem}`}>
      <div className="row">
        <div className="col m12">
          <IconButton clickHandler={removeHandler}>
            <i className="material-icons">delete</i>
          </IconButton>
          <div className={`center ${classes.title}`}>
            <h5>{name}</h5>
          </div>
        </div>
        <div className="col m6">
          <div className={classes.leftColumn}>
            <img src={img} alt="Lorem" />
          </div>
        </div>
        <div className="col m6">
          <div className={classes.rightColumn}>
            <p>
              Category: <span>{category}</span>
            </p>
            <p className={classes.priceItem}>
              Price: <span>${price}</span>
            </p>
            <p>
              Amount: <span>{amount}</span>
            </p>
          </div>
        </div>
        <div className="col m12">
          <div className={classes.totalPriceItem}>
            <p>
              Total: <span>${totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default OrderItem
