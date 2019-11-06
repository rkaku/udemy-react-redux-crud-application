import React from 'react'
import EventNewForm from '../components/form/EventNewForm'
import { useDispatch } from 'react-redux'
import { asyncEventCreate } from './../redux/async/events'
import * as ReactRouter from 'react-router-dom'

export default function Container () {

  function EventNew () {
    return (
      <div>
        <EventNewForm onSubmit={ handleSubmit } />
      </div>
    )
  }

  const history = ReactRouter.useHistory()
  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncEventCreate( values ) )
    history.push( '/events' )
  }, [dispatch, history] )
  return (
    <div>
      <EventNew />
    </div>
  )
}
