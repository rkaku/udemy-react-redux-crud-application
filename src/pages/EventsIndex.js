import React from 'react';
import Table from '../components/table/Table'

export default function Container () {

  function EventsIndex () {
    return (
      <>
        <h3>Events Index</h3>
        <Table />
      </>
    )
  }

  return (
    <EventsIndex />
  )
}