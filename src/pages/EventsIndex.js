import React from 'react'
import Table from '../components/table/Table'
import FloatingActionButton from './../components/button/FloatingActionButton'


export default function Container () {

  function EventsIndex () {
    return (
      <>
        <Table />
        <FloatingActionButton
          to="event/new"
        />
      </>
    )
  }

  return (
    <EventsIndex />
  )
}