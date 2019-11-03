import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from "react-router-dom";
import Thead from './../components/table/Thead'
import Trow from './../components/table/Trow'
// import EventEdit from './../pages/EventEdit.js'
import { asyncEventShow, asyncEventDelete } from './../redux/async/events'
export default function Container ( props ) {

  function EventShow () {
    return (
      <React.Fragment>
        <table>
          <Thead />
          <tbody>
            { tbodyDisplay() }
          </tbody>
        </table>
        <Link to={ `/event/edit/${ props.match.params.id }` }>Edit</Link>
        <Link to="/events" onClick={ handleClick }>Delete</Link>
        {/* <Route path="/event/edit/:id" component={ EventEdit } /> */}
      </React.Fragment>
    )
  }

  const dispatch = useDispatch()
  React.useEffect( () => {
    dispatch( asyncEventShow( props.match.params.id ) )
  }, [ dispatch, props.match.params.id ] )
  const item = useSelector( state => state.events.item )
  const tbodyDisplay = React.useCallback( () => {
    if ( !item ) return null
    return <Trow item={ item } />
  }, [ item ] )
  const handleClick = React.useCallback( () => {
    dispatch( asyncEventDelete( props.match.params.id ) )
  }, [ dispatch, props.match.params.id ] )
  return (
    <div>
      <EventShow />
    </div>
  )
}
