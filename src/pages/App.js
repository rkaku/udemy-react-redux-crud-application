import React from "react"
import { AppContext, initialState, reducer } from '../actions/reducers/App'
import useAxios from '../hooks/customHooks/useAxios'
// import { createStore } from "redux"
// import { Provider } from "react-redux"
import Events from "../components/Events"
import { readEvents } from "../actions/creators/App"
import { rests, QUERYSTRING, ROOT_URL } from "../data/rest";

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Events />
    </>
  )
}

const Container = () => {
  const url = ROOT_URL + rests.EVENTS + QUERYSTRING
  const [loading, error, data] = useAxios(url)
  const [state, dispatch] = React.useReducer(reducer, initialState())
  console.log('state', state)
  React.useEffect(() => dispatch(readEvents(data)), [data])
  // const store = createStore(reducer)
  return (
    <AppContext.Provider value={ { loading, error, data } }>
      {/* <Provider store={ store }> */ }
      <App />
      {/* </Provider> */ }
    </AppContext.Provider>
  )
}

export default Container