import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'

import CountProvider from './context/Cart'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CountProvider >
          <Route path="/" component={Home} exact />
        </CountProvider>
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  )
}

