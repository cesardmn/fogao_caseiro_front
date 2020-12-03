import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComboPage from './pages/ComboPage'
import PortionsPage from './pages/PortionPage'
import LunchesPage from './pages/LunchPage'

function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/combo" component={ComboPage} exact />
        <Route path="/:name" component={LunchesPage} exact />
        <Route path="/combo/:id" component={PortionsPage} />
      </Switch>
      <Route path='/menu' component={() => {
        window.location.href = 'https://fogaocaseiro.com.br/menu';
        return null;
      }} />
    </BrowserRouter>
  )
}

export default Routes
