import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles( theme => ( {
  button: {
    margin: theme.spacing( 1 )
  },
  input: {
    display: 'none'
  }
} ) )

export default function OutlinedButton ( { type, label, disabled, color} ) {
  const classes = useStyles()
  return (
    <div>
      <Button
        type={ type }
        disabled={ disabled }
        color={ color }
        variant="outlined"
        className={ classes.button }
      >
        { label }
      </Button>
    </div>
  )
}