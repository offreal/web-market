import { Fragment, useEffect } from 'react'
import { createPortal } from 'react-dom'

import classes from './Modal.module.scss'
import IconButton from '../IconButton'

const Modal = ({ children, closeHandler }) => {
  const $rootElement = document.createElement('div')

  useEffect(() => {
    $rootElement.id = 'modal-container'
    document.body.style.overflow = 'hidden'
    document.body.appendChild($rootElement)

    return () => {
      document.body.style.overflow = 'visible'
      document.body.removeChild($rootElement)
    }
  })

  return createPortal(
    <Fragment>
      <div className={classes.modalOverlay} onClick={closeHandler}></div>
      <div className={`modal ${classes.modal}`}>
        <IconButton clickHandler={closeHandler} />
        {children}
      </div>
    </Fragment>,
    $rootElement,
  )
}

export default Modal
