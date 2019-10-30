import React from 'react'

const Trow = ({ event }) => {
  return (
    <tr>
      <td>{ event.id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
    </tr>
  )
}

export default Trow