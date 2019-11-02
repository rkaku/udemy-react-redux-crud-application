import React from 'react'
import { Link } from 'react-router-dom'
export default function Container ( props ) {

  function Trow () {
    return (
      <tr>
        <td>
          { props.item.id }
        </td>
        <td>
          <Link to={ `/event/${ props.item.id }` }>
            { props.item.title }
          </Link>
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
