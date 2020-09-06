import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import FitPage from './pages/FitPage';
import LowCarbPage from './pages/LowCarbPage';



function Routes() {
  return (
    <HashRouter>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/fits" component={FitPage} />
      <Route path="/lowcarb" component={LowCarbPage} />
    </HashRouter>
  )
}


export default Routes
