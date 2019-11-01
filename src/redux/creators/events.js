import types from '../types/events'

export function readEvents ( response ) {
  return { type: types.READ_EVENTS, response: response }
}