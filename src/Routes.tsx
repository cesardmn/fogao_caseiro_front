import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComboPage from './pages/Combo';
import Home from './pages/Home';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/combo" component={ComboPage}  />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
