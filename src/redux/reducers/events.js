import types from '../types/events'

function initialState () {
  return {
    items: []
  }
}

export default function ( state = initialState(), action ) {

  const items = state
  switch ( action.type ) {
    case types.EVENTS_INDEX:
      return { items: action.response.data }
    case types.EVENT_SHOW:
      return { ...items, item: action.response.data }
    case types.EVENT_CREATE:
      return { ...items, [ action.values.id ]: action.values }
    case types.EVENT_EDIT:
      return { ...items, item: action.item }
    case types.EVENT_UPDATE:
      return { ...items, [ action.values.id ]: action.values }
    case types.EVENT_DELETE:
      delete items[ action.id ]
      return items
    case types.EVENT_LOAD:
      return { ...items, item: action.response.data }
    default:
      return { ...items }
  }
}