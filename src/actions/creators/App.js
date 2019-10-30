import types from '../types/App'

export const readEvents = (data) => {
  return { type: types.READ_EVENTS, data: data }
}
