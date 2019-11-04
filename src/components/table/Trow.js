import React from 'react'
import { Link } from 'react-router-dom'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


export default function Container ( props ) {

  function Trow () {
    return (
      <TableRow>
        <TableCell>
          { props.item.id }
        </TableCell>
        <TableCell>
          <Link to={ `/event/${ props.item.id }` }>
            { props.item.title }
          </Link>
        </TableCell>
        <TableCell>
          { props.item.body }
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Trow />
  )
}
