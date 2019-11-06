import React from 'react'
import EventEditForm from '../components/form/EventEditForm'
import { useDispatch } from 'react-redux'
import { asyncEventUpdate } from './../redux/async/events'
import * as ReactRouter from 'react-router-dom'


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

  const history = ReactRouter.useHistory()
  const dispatch = useDispatch()
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncEventUpdate( values ) )
    history.push( '/events' )
  }, [dispatch, history] )
  return (
    <div>
      <EventEdit />
    </div>
  )
}
