import types from '../types/events'

export function readEvents ( response ) {
  return { type: types.READ_EVENTS, response: response }
}

export function readEvent ( id ) {
  return { type: types.READ_EVENT }
}

export function createEvent () {
  return { type: types.CREATE_EVENT }
}