import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncEventsIndex } from './../../redux/async/events'
import Trow from './Trow'

export default function Container () {

  function Tbody () {
    return (
      <tbody>
        { tbodyDisplay() }
      </tbody>
    )
  }

  const dispatch = useDispatch()
  React.useEffect( () => {
    dispatch( asyncEventsIndex() )
  }, [ dispatch ] )
  const items = useSelector( state => state.events.items )
  const tbodyDisplay = React.useCallback( () => {
    return items.map( item => {
      return (
        <Trow key={ item.id } item={ item } />
      )
    } )
  }, [ items ] )

  return (
    <Tbody />
  )
}
