import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './pages/Menu'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" component={Menu} />

        <Route path='/' component={() => {
          window.location.href = '/menu';
          return null;
        }} exact />

        <Route path='/admin' component={() => {
          window.location.href = 'https://backfc.herokuapp.com/admin';
          return null;
        }} />
        
      </Switch>
    </BrowserRouter>
  )
}
