import { Link } from 'react-router-dom'
import classes from './Products.module.scss'

const ProductCard = ({ productId, name, img, price, alreadyInCart, addItemToCart }) => {
  const containerAlreadyInCart = (
    <div className={classes.alreadyInCart}>
      <i className="material-icons">check</i>
    </div>
  )

  const buttonAddToCart = (
    <button
      className="btn-small green"
      title="Add to cart"
      onClick={addItemToCart}
      disabled={alreadyInCart}
    >
      <i className="material-icons small">add_shopping_cart</i>
    </button>
  )

  return (
    <div className="col s12 m4">
      <div className="card hoverable">
        <div className="card-image">{img && <img src={img} alt={name} />}</div>
        <div className="card-content">
          <p className="truncate" title={name}>
            {name}
          </p>
          <p>${price}</p>
        </div>
        <div className={`card-action ${classes.cardAction}`}>
          <Link
            className="btn-small light-blue darken-2"
            title="More details"
            to={`products/${productId}`}
          >
            <i className="material-icons small">more_horiz</i>
          </Link>
          {alreadyInCart ? containerAlreadyInCart : buttonAddToCart}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
