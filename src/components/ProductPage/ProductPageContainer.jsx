import { Redirect } from 'react-router'

import { normalizeDate } from '../../utils/normalizeDate'
import useProduct from '../../hooks/useProduct'
import useCartItem from '../../hooks/useCartItem'
import Breadcrumbs from '../common/Breadcrumbs'
import Preloader from '../common/Preloader'
import ProductPage from './ProductPage'

const ProductPageContainer = ({ match }) => {
  const productsId = Number(match?.params?.productId)
  const { isFetching, productData } = useProduct(productsId)
  const { cartItems, addItemToCart } = useCartItem()

  if (!productsId) {
    return <Redirect to="/products" />
  }

  if (isFetching || (productData && productData?.id !== productsId)) {
    return <Preloader />
  }

  const breadcrumbsData = [
    { id: 1, name: 'Products', link: '/products' },
    !productData
      ? { id: 2, name: 'Not found', link: null }
      : { id: 2, name: productData?.name, link: productData?.link },
  ]

  const addItemToCartHandler = (productId) => () => {
    addItemToCart(productId)
  }

  const productNotFound = (
    <div className="center">
      <p>Product not found</p>
    </div>
  )

  const hasInCartItems = productData && cartItems.some((item) => item.productId === productData.id)

  const productPage = !productData ? (
    productNotFound
  ) : (
    <ProductPage
      breadcrumbs={breadcrumbsData}
      name={productData.name}
      img={productData.img}
      price={productData.price}
      discount={productData.discount * 100}
      category={productData.category}
      createdDate={normalizeDate(productData.createdDate)}
      updatedDate={normalizeDate(productData.updatedDate)}
      deletedDate={normalizeDate(productData.deletedDate)}
      alreadyInCart={hasInCartItems}
      addItemToCart={addItemToCartHandler(productData.id)}
    />
  )

  return (
    <div className="product">
      <Breadcrumbs breadcrumbsData={breadcrumbsData} />
      {productPage}
    </div>
  )
}

export default ProductPageContainer
