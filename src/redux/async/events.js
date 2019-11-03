import axios from 'axios'
import { eventCreate, eventsIndex, eventShow, eventUpdate, eventDelete, eventLoad } from './../creators/events'
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
      url: heroku.ROOT_URL + heroku.EVENT + id + heroku.QUERYSTRING
    } )
    dispatch( eventShow( response ) )
  }
}

export function asyncEventCreate ( values ) {
  return async dispatch => {
    await axios( {
      method: 'POST',
      url: heroku.ROOT_URL + heroku.EVENT + heroku.QUERYSTRING,
      data: values
    } )
    dispatch( eventCreate(values) )
  }
}

export function asyncEventUpdate ( values ) {
  return async dispatch => {
    await axios( {
      method: 'PUT',
      url: heroku.ROOT_URL + heroku.EVENT + values.id + heroku.QUERYSTRING,
      data: values
    } )
    dispatch( eventUpdate( values ) )
  }
}

export function asyncEventDelete ( id ) {
  return async dispatch => {
    await axios( {
      method: 'DELETE',
      url: heroku.ROOT_URL + heroku.EVENT + id + heroku.QUERYSTRING
    } )
    dispatch( eventDelete( id ) )
  }
}

export function asyncEventLoad ( id ) {
  return async dispatch => {
    const response = await axios( {
      method: 'GET',
      url: heroku.ROOT_URL + heroku.EVENT + id + heroku.QUERYSTRING
    } )
    dispatch( eventLoad( response ) )
  }
}