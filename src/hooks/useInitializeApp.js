import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { initializeApp } from '../redux/actions/appActions'
import { getInitialized } from '../redux/selectors/appSelectors'

const useInitializeApp = () => {
  const initialized = useSelector(getInitialized)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  return {
    initialized,
  }
}

export default useInitializeApp
