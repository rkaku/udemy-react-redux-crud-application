import React from 'react'
import Trow from './Trow'

const Tbody = ({data}) => {
  return (
    <tbody>
      {
        data.map(event => (
          <Trow key={ event.id } event={ event } />
        ))
      }
    </tbody>
  )
}

export default Tbody