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
                activeClassName="active-link-style"
                className="App-link"
                // exact
                to="/">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                // exact
                to="/events">Index</NavLink>
            </li>
            <li className="li-style">
              <NavLink
                activeClassName="active-link-style"
                className="App-link"
                // exact
                to="/event/new">New</NavLink>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={ EventsIndex } />
        <Route exact path="/events" component={ EventsIndex } />
        <Route exact path="/event/new" component={ EventNew } />
        <Route exact path="/event/:id" component={ EventShow } />
        <Route path="/event/edit/:id" component={ EventEdit } />
      </div>
    )
  }

  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </Provider>
  )
}