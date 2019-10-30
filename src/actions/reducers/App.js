import types from '../types/App'
import { createContext } from 'react'

function initialState() {
  return {
    value: 0
  }
}

function reducer(state, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, value: state.value + 1 }
    case types.DECREMENT:
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}

const AppContext = createContext(initialState())

export { AppContext, initialState, reducer }