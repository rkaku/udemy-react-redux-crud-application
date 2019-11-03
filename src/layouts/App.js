import React from 'react'
import './../styles/App.scss'
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './../redux/reducers/store'
import EventsIndex from './../pages/EventsIndex'
import EventShow from './../pages/EventShow'
import EventNew from './../pages/EventNew'
import EventEdit from './../pages/EventEdit.js'

export default function Container () {

  function App () {
    return (
      <div className="App">
        <div className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                exact
                activeClassName="active-link-style"
                className="App-link"
                to="/">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                to="/events">Index</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                to="/event/new">New</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/event/edit/:id" component={ EventEdit } />
          <Route path="/event/new" component={ EventNew } />
          <Route path="/event/:id" component={ EventShow } />
          <Route path="/events" component={ EventsIndex } />
          <Route path="/" component={ EventsIndex } />
        </Switch>
      </div>
    )
  }

  return (
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}