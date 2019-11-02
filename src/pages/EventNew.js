import React from 'react'
import EventNewForm from '../components/form/EventNewForm'
import { useDispatch } from 'react-redux'
import { asyncEventCreate } from './../redux/async/events'
export default function Container () {

  function EventNew () {
    return (
      <div>
        <EventNewForm onSubmit={ handleSubmit } />
      </div>
    )
  }

  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncEventCreate( values ) )
  }, [ dispatch ] )
  return (
    <div>
      <EventNew />
    </div>
  )
}
