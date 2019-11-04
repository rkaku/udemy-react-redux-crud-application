import React from 'react'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Thead from './Thead'
import Tbody from './Tbody'


export default function Container () {
  const classes = useStyle()

  function Component () {
    return (
      <Paper className={ classes.root }>
        <Table className={ classes.table } aria-label="events table">
          <Thead />
          <Tbody />
        </Table>
      </Paper>
    )
  }

  return (
    <Component />
  )
}



const useStyle = makeStyles( {
  root: {
    width: '80%',
    overFlowX: 'auto'
  },
  table: {
    minWidth: 650
  }
} )