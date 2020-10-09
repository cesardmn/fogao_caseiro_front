import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComboPage from './pages/Combo';
import ComboOptions from './pages/ComboOptions';
import Home from './pages/Home';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/combo" component={ComboPage}  exact/>
        <Route path="/combo/:id" component={ComboOptions}  />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
