import classes from './ProductPage.module.scss'

const ProductPage = ({
  name,
  img,
  price,
  discount,
  category,
  createdDate,
  updatedDate,
  deletedDate,
  alreadyInCart,
  addItemToCart,
}) => {
  const containerAlreadyInCart = (
    <div className={classes.alreadyInCart}>
      <div>
        <i className="material-icons">check</i>
      </div>
      <span>Already in the cart</span>
    </div>
  )

  const buttonAddToCart = (
    <button
      className="btn-small green"
      title="Add to cart"
      onClick={addItemToCart}
      disabled={alreadyInCart}
    >
      <i className="material-icons small left">add_shopping_cart</i>
      Buy
    </button>
  )

  return (
    <div className="row">
      <div className="col m12">
        <div className={classes.title}>
          <h1 className={classes.titleName}>{name}</h1>
        </div>
      </div>
      <div className="col m6">
        <div className={classes.image}>
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="col m6">
        <div className={classes.control}>
          {alreadyInCart ? containerAlreadyInCart : buttonAddToCart}
        </div>
        <div className={classes.description}>
          <p>Price: ${price}</p>
          <p>Discount: ${discount}%</p>
          <p>Category: {category}</p>
          <p>Created Date: {createdDate}</p>
          {updatedDate && createdDate !== updatedDate && <p>Updated Date: {updatedDate}</p>}
          {deletedDate && <p>Deleted Date: {deletedDate}</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
