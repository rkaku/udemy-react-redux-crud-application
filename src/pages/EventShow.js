import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Thead from './../components/table/Thead'
import Trow from './../components/table/Trow'
import { asyncEventShow } from './../redux/async/events'
export default function Container ( props ) {

  function EventShow () {
    return (
      <table>
        <Thead />
        <tbody>
          { tbodyDisplay() }
        </tbody>
      </table>
    )
  }

  const dispatch = useDispatch()
  React.useEffect( () => {
    dispatch( asyncEventShow( props.match.params.id ) )
  }, [ dispatch, props.match.params.id ] )
  const item = useSelector( state => state.events.item )
  console.log( props.match.params.id )
  console.log( { item } )
  const tbodyDisplay = React.useCallback( () => {
    if ( !item ) return null
    return <Trow item={ item } />
  }, [ item ] )
  return (
    <div>
      <EventShow />
    </div>
  )
}
