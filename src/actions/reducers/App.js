import { createContext } from 'react'
import types from './../types/App'
// import _ from 'lodash'

function initialState() {
  return {
    events: []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case types.READ_EVENTS:
      return action.data
    default:
      return state
  }
}

const AppContext = createContext(initialState())

export { AppContext, initialState, reducer }