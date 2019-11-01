import React from 'react'

export default function Container ( props ) {

  function Trow () {
    return (
      <tr>
        <td>
          { props.item.id }
        </td>
        <td>
          { props.item.title }
        </td>
        <td>
          { props.item.body }
        </td>
      </tr>
    )
  }

  return (
    <Trow />
  )
}
