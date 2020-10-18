import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import  ComboPage from './pages/ComboPage'

function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/combo" component={ComboPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
