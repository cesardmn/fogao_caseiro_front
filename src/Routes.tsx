import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FitPage from './pages/FitPage';
import LowCarbPage from './pages/LowCarbPage';
import ItemPage from './pages/ItemPage';
import CheckoutPage from './pages/CartPage';
import Home from './pages/Home';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/app" component={LandingPage} exact />
        <Route path="/fit" component={FitPage} exact/>
        <Route path="/lowcarb" component={LowCarbPage} exact/>
        <Route path="/:item/:title" component={ItemPage} exact/>
        <Route path="/pedidos" component={CheckoutPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
