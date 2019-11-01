import types from '../types/events'

function initialState () {
  return {
    items: []
  }
}

export default function ( items = initialState(), action ) {

  switch ( action.type ) {
    case types.READ_EVENTS:
      return { ...items, items: action.response.data }
    default:
      return items
  }
}