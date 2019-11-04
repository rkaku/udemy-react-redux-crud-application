import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


export default function Container () {

  function Thead () {
    return (
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableHead>
    )
  }

  return (
    <Thead />
  )
}
