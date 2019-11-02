import types from '../types/events'

export function eventsIndex ( response ) {
  return { type: types.EVENTS_INDEX, response: response }
}

export function eventShow ( response ) {
  return { type: types.EVENT_SHOW, response }
}

export function eventCreate () {
  return { type: types.EVENT_CREATE }
}