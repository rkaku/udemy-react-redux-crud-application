import axios from 'axios'
import { eventCreate, eventsIndex, eventShow } from './../creators/events'
import heroku from './../../api/heroku'

export function asyncEventsIndex () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.ROOT_URL + heroku.EVENTS + heroku.QUERYSTRING
    } )
    dispatch( eventsIndex( response ) )
  }
}

export function asyncEventShow ( id ) {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.ROOT_URL + heroku.EVENTS + id + heroku.QUERYSTRING
    } )
    dispatch( eventShow( response ) )
  }
}

export function asyncEventCreate ( values ) {
  return async dispatch => {
    await axios( {
      method: 'POST',
      url: heroku.ROOT_URL + heroku.EVENTS + heroku.QUERYSTRING,
      data: values
    } )
    dispatch( eventCreate() )
  }
}