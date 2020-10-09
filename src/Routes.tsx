import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComboPage from './pages/Combo';
import ComboOptions from './pages/ComboOptions';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/combo" component={ComboPage}  exact/>
        <Route path="/combo/:id" component={ComboOptions}  />
        <Route path="/:name" component={ItemPage} /> 
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
