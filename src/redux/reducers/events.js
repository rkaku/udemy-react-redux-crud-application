import types from '../types/events'

function initialState () {
  return {
    items: []
  }
}

export default function ( items = initialState(), action ) {

  switch ( action.type ) {
    case types.READ_EVENTS:
      return { items: action.response.data }
    case types.READ_EVENT:
      return items.find( item => item.id === action.id )
    case types.CREATE_EVENT:
      return items
    default:
      return items
  }
}