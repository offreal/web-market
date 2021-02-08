import { Link } from 'react-router-dom'

import classes from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ breadcrumbsData }) => {
  const breadcrumbs = breadcrumbsData.map((breadcrumb, index) => {
    if (index === breadcrumbsData.length - 1) {
      return (
        <span key={breadcrumb.id} className={`breadcrumb ${classes.breadcrumb}`}>
          {breadcrumb.name}
        </span>
      )
    }

    return (
      <Link key={breadcrumb.id} to={breadcrumb.link} className={`breadcrumb ${classes.breadcrumb}`}>
        {breadcrumb.name}
      </Link>
    )
  })

  if (!breadcrumbs) {
    return null
  }

  return (
    <div className="row">
      <div className="col s12">
        <nav className={classes.nav}>
          <div className={`nav-wrapper ${classes.navWrapper}`}>{breadcrumbs}</div>
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumbs
