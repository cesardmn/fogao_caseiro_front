import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrintMenu from './pages/PrintMenu';


function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/menu" component={PrintMenu} exact />
        <Route path='/' component={() => {
          window.location.href = 'https://fogaocaseiro.com.br/';
          return null;
        }} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
