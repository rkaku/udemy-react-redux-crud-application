import React from 'react'
import EventEditForm from '../components/form/EventEditForm'
import { useDispatch } from 'react-redux'
import { asyncEventUpdate } from './../redux/async/events'


export default function Container ( props ) {

  function EventEdit () {
    return (
      <div>
        <EventEditForm
          onSubmit={ handleSubmit }
        />
      </div>
    )
  }

  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncEventUpdate( values ) )
  }, [ dispatch ] )
  return (
    <div>
      <EventEdit />
    </div>
  )
}
