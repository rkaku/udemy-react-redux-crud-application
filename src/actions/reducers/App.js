import types from '../types/App'

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

export { initialState, reducer }