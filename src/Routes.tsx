import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import  ComboPage from './pages/ComboPage'
import PortionsPage from './pages/PortionPage'
import LunchesPage from './pages/LunchPage'
import PrintMenuPage from './pages/PrintMenuPage'

function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/menu" component={PrintMenuPage} exact/>
        <Route path="/" component={HomePage} exact/>
        <Route path="/combo" component={ComboPage} exact />
        <Route path="/:name" component={LunchesPage} exact />
        <Route path="/combo/:id" component={PortionsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
