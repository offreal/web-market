import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProductsRequest } from '../redux/actions/productsActions'
import { getFetching, getProductsData } from '../redux/selectors/productsSelectors'

const useProducts = () => {
  const isFetching = useSelector(getFetching)
  const productsData = useSelector(getProductsData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsRequest())
  }, [dispatch])

  return {
    isFetching,
    productsData,
  }
}

export default useProducts
