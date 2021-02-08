import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import classes from './App.module.scss'
import store from './redux/store'
import useInitializeApp from './hooks/useInitializeApp'
import Preloader from './components/common/Preloader'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
import NotFound from './components/NotFound'
import OrderPage from './components/OrderPage'

const AppContainer = () => {
  const { initialized } = useInitializeApp()

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className={classes.app}>
      <Header />
      <main className={`container ${classes.main}`}>
        <Switch>
          <Redirect exact to="/products" from="/" />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productId" component={ProductPage} />
          <Route path="/order" component={OrderPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

const App = () => (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
)

export default App
