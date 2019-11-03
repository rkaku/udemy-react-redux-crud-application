import types from '../types/events'

export function eventsIndex ( response ) {
  return { type: types.EVENTS_INDEX, response: response }
}

export function eventShow ( response ) {
  return { type: types.EVENT_SHOW, response }
}

export function eventCreate (values) {
  return { type: types.EVENT_CREATE, values }
}

export function eventEdit ( item ) {
  return { type: types.EVENT_EDIT, item }
}

export function eventUpdate ( values ) {
  return { type: types.EVENT_UPDATE, values }
}

export function eventDelete ( id ) {
  return { type: types.EVENT_DELETE, id }
}

export function eventLoad ( response ) {
  return { type: types.EVENT_LOAD, response }
}