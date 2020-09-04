import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FitPage from './pages/FitPage';


function Routes() {
  return (
    <HashRouter>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/fits" component={FitPage} />
    </HashRouter>
  )
}


export default Routes
