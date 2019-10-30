import React, { useCallback, useMemo, useReducer, useState } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { initialState, reducer } from '../actions/reducers/App'
import AppContext from '../hooks/contexts/App'

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
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  return (
    <>
      <Counter
        count={ count }
        increment={ increment }
        decrement={ decrement }
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
  const store = createStore(reducer)
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <Provider store={ store }>
        <App />
      </Provider>
    </AppContext.Provider>
  )
}

export default Container
