import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductRequest } from '../redux/actions/productsActions'
import { getFetching, getProductData } from '../redux/selectors/productsSelectors'

const useProduct = (productId) => {
  const isFetching = useSelector(getFetching)
  const productData = useSelector(getProductData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (productId && productId !== productData?.id) {
      dispatch(getProductRequest(productId))
    }
  }, [productId, productData?.id, dispatch])

  return {
    isFetching,
    productData,
  }
}

export default useProduct
