import React from 'react'
import EventEditForm from '../components/form/EventEditForm'
import { useDispatch, useSelector } from 'react-redux'
import { asyncEventUpdate, asyncEventLoad } from './../redux/async/events'
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
  // React.useEffect( () => {
  //   dispatch( asyncEventLoad( props.match.params.id ) )
  // }, [dispatch, props.match.params.id] )
  // const asyncItem = useSelector( state => state.events.item )
  // console.log( 'asyncItem', asyncItem )
  const handleSubmit = React.useCallback( ( values ) => {
    dispatch( asyncEventUpdate( values ) )
  }, [ dispatch ] )
  return (
    <div>
      <EventEdit />
    </div>
  )
}
