import axios from 'axios'
import { createEvent, readEvents } from './../creators/events'
import heroku from './../../api/heroku'

export function asyncReadEvents () {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.ROOT_URL + heroku.INDEX + heroku.QUERYSTRING
    } )
    dispatch( readEvents( response ) )
  }
}

export function asyncCreateEvent ( values ) {
  return async dispatch => {
    await axios( {
      method: 'POST',
      url: heroku.ROOT_URL + heroku.CREATE + heroku.QUERYSTRING,
      data: values
    } )
    dispatch( createEvent() )
  }
}