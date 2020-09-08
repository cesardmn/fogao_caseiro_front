import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FitPage from './pages/FitPage';
import LowCarbPage from './pages/LowCarbPage';
import ItemPage from './pages/ItemPage';




function Routes() {
  return (
    <HashRouter >
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/fits" component={FitPage} />
        <Route path="/lowcarb" component={LowCarbPage} />
        <Route path="/item" component={ItemPage} />
      </Switch>
    </HashRouter>
  )
}


export default Routes
