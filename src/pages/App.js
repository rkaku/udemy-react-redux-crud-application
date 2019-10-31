import React from "react"
import { BrowserRouter, NavLink, Prompt, Route, Switch } from "react-router-dom"
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "./App.css"
// import { createStore } from "redux"
// import { Provider } from "react-redux"
import Events from "./Events"
import EventsNew from "./EventsNew"
import useAxios from "./../hooks/customHooks/useAxios"
import { readEvents } from "./../actions/creators/App"
import { rests, QUERYSTRING, ROOT_URL } from "../data/rest";
import { AppContext, initialState, reducer } from "./../actions/reducers/App"

function App({ prompt, message, inputPassword }) {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hello, World!</h1>
        <ul className="ul-style">
          <li className="li-style">
            <NavLink className="App-link" activeClassName="link-active-style" exact to="/">Home</NavLink>
          </li>
          <li className="li-style">
            <NavLink className="App-link" activeClassName="link-active-style" exact to="/events">Index</NavLink>
          </li>
          <li className="li-style">
            <NavLink className="App-link" activeClassName="link-active-style" exact to="/events/new">New</NavLink>
          </li>
        </ul>
        <Prompt when={ false } message={ (location) => message(location) }></Prompt>
        <Switch>
          <Route exact path="/" render={ ({ match }) => inputPassword(match) } />
          <Route exact path="/events" component={ Events } />
          <Route exact path="/events/new" component={ EventsNew } />
          <Route exact component={ Events } />
        </Switch>
      </div>
    </div>
  )
}

export default function Container() {
  const [keyword, setKeyword] = React.useState('')
  // const [body, setBody] = React.useState('')
  const prompt = React.useCallback(() => {
    return !keyword
  }, [keyword])
  const message = React.useCallback((location) => {
    return location.pathname.startsWith('/events/new') ? true : 'Are you sure ?'
  }, [])
  const handleChange = React.useCallback((event) => {
    return setKeyword(event.target.value)
  }, [])
  const inputPassword = React.useCallback((match) => {
    return (
      <>
        <h2>Search { keyword }</h2>
        <input type="text" value={ keyword } onChange={ (event) => handleChange(event) } />
      </>
    )
  }, [handleChange, keyword])
  const url = ROOT_URL + rests.EVENTS + QUERYSTRING
  const [loading, error, data] = useAxios(url)
  const [state, dispatch] = React.useReducer(reducer, initialState())
  console.log('state', state)
  React.useEffect(() => dispatch(readEvents(data)), [data])
  // const store = createStore(reducer)
  return (
    <AppContext.Provider value={ { loading, error, data } }>
      {/* <Provider store={ store }> */ }
      <BrowserRouter>
        {/* <MuiThemeProvider> */ }
        <App prompt={ prompt } message={ message } inputPassword={ inputPassword } />
        {/* </MuiThemeProvider> */ }
      </BrowserRouter>
      {/* </Provider> */ }
    </AppContext.Provider>
  )
}