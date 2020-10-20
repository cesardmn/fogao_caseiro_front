import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import  ComboPage from './pages/ComboPage'
import ChoicePage from './pages/ChoicePage'

function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/combo" component={ComboPage} exact />
        <Route path="/:name" component={ChoicePage} exact />
        <Route path="/combo/:id" component={ChoicePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
