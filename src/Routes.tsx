import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import FitPage from './pages/FitPage';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} exact/>
      {/* <Route path="/fits" component={FitPage} /> */}
    </BrowserRouter>
  )
}


export default Routes
