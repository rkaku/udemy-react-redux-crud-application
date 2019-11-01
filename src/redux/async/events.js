import axios from 'axios'
import { readEvents } from './../creators/events'
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