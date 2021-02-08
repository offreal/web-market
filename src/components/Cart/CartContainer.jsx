import { Fragment, useState } from 'react'

import Modal from '../common/Modal'
import CartButton from './CartButton'
import CartModalContent from './CartModalContent'

const CartContainer = () => {
  const [isOpen, toggleOpen] = useState(false)

  const showCartModal = () => {
    toggleOpen(true)
  }

  const closeCartModal = () => {
    toggleOpen(false)
  }

  const modalCart = (
    <Modal closeHandler={closeCartModal}>
      <CartModalContent closeHandler={closeCartModal} />
    </Modal>
  )

  return (
    <Fragment>
      {isOpen && modalCart}
      <CartButton showCartModal={showCartModal} />
    </Fragment>
  )
}

export default CartContainer
