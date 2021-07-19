import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ServiceContextProvider } from '../context/serviceContext'
import { Details } from '../page/details'
import { Home } from '../page/home'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ServiceContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:name' component={Details} />
        </Switch>
      </ServiceContextProvider>
    </BrowserRouter>
  )
}