import types from '../types/App'

export const increment = () => {
  return { type: types.INCREMENT }
}

export const decrement = () => {
  return { type: types.DECREMENT }
}