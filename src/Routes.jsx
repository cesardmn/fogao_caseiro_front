import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './pages/Menu'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Menu} exact/>
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  )
}

