import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ItemChoice from './pages/ItemChoice'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

