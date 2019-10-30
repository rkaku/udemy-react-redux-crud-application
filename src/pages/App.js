import React, { useCallback, useMemo, useReducer, useState } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AppContext, initialState, reducer } from '../actions/reducers/App'
// import AppContext from '../hooks/contexts/App'
import { increment, decrement } from "../actions/creators/App"

const Counter = (props) => {
  console.log(props)
  return (
    <>
      <h1>count: { props.count }</h1>
      <button onClick={ props.increment }>+1</button>
      <button onClick={ props.decrement }>-1</button>
    </>
  )
}

const CounterContainer = (props) => {
  console.log(props)
  const { state, dispatch } = React.useContext(AppContext)
  const incrementCallback = useCallback(() => {
    dispatch(increment())
  }, [dispatch])
  const decrementCallback = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])
  return (
    <>
      <Counter
        count={ state.value }
        increment={ incrementCallback }
        decrement={ decrementCallback }
      />
    </>
  )
}

const App = (props) => {
  console.log(props)
  return (
    <>
      <h1>Hello, World!</h1>
      <CounterContainer />
    </>
  )
}

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState())
  // const store = createStore(reducer)
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      {/* <Provider store={ store }> */ }
      <App />
      {/* </Provider> */ }
    </AppContext.Provider>
  )
}

export default Container
