import { Link } from 'react-router-dom'

import Cart from '../Cart'

export default function Header() {
  return (
    <header className="page-header">
      <nav className="light-blue darken-4">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Web Market
          </Link>
          <ul className="right">
            <li>
              <Cart />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
