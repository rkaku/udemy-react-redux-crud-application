import React from 'react'
import './../styles/App.scss'
import { BrowserRouter, NavLink, Link, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './../redux/reducers/store'
import EventsIndex from './../pages/EventsIndex'
import EventNew from './../pages/EventNew'

export default function Container () {

  function App () {
    return (
      <div className="App">
        <div className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                exact
                to="/">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                exact
                to="/index">Index</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                exact
                to="/new">New</NavLink>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={ EventsIndex } />
        <Route exact path="/index" component={ EventsIndex } />
        <Route exact path="/new" component={ EventNew } />
      </div>
    )
  }

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}