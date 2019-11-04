import React from 'react'
import Table from '../components/table/Table'
import FloatingActionButton from './../components/button/FloatingActionButton'
import styled from 'styled-components'


export default function Container () {

  function EventsIndex () {
    return (
      <>
        <Table />
        <ButtonWrapper>
          <FloatingActionButton
            to="event/new"
          />
        </ButtonWrapper>
      </>
    )
  }

  return (
    <EventsIndex />
  )
}


const ButtonWrapper = styled.div`

`