import classes from './IconButton.module.scss'

const IconButton = ({ clickHandler, children }) => {
  return (
    <button className={classes.closeModal} onClick={clickHandler}>
      {children ? children : <i className="material-icons">close</i>}
    </button>
  )
}

export default IconButton
