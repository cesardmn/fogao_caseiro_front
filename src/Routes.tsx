import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComboPage from './pages/Combo';
import ComboOptions from './pages/ComboOptions';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import PrintMenu from './pages/PrintMenu';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/menu" component={PrintMenu} exact />
        <Route path="/" component={Home} exact />
        <Route path="/combo" component={ComboPage} exact />
        <Route path="/combo/:id" component={ComboOptions} exact/>
        <Route path="/:name" component={ItemPage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
