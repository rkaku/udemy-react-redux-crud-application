import types from '../types/events'

function initialState () {
  return {
    items: []
  }
}

export default function ( items = initialState(), action ) {

  switch ( action.type ) {
    case types.EVENTS_INDEX:
      return { ...items, items: action.response.data }
    case types.EVENT_SHOW:
      return { item: action.response.data }
    case types.EVENT_CREATE:
      return items
    case types.EVENT_EDIT:
      return items
    case types.EVENT_UPDATE:
      return items
    case types.EVENT_DELETE:
      return items
    default:
      return items
  }
}