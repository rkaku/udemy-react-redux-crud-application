import React from 'react'
import EventNewForm from '../components/form/EventNewForm'
import { useDispatch, useSelector } from 'react-redux'
// import Values from 'redux-form-website-template'
import { asyncCreateEvent } from './../redux/async/events'
export default function Container () {

  function EventNew () {
    return (
      <div>
        <EventNewForm onSubmit={ handleSubmit } />
        {/* <Values form="eventNewForm" /> */}
      </div>
    )
  }

  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncCreateEvent( values ) )
  }, [ dispatch ] )
  return (
    <div>
      <EventNew />
    </div>
  )
}
