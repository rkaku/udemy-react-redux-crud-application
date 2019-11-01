import React from 'react';
import Event from './../components/Event'

export default function Container () {

  function EventsIndex () {
    return (
      <>
        <h3>Events Index</h3>
        <Event />
      </>
    )
  }

  return (
    <EventsIndex />
  )
}