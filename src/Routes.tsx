import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';



function Routes() {
  return (
    <BrowserRouter >
      <Switch>
      <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
