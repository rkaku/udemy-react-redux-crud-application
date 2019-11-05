import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// import { Link } from 'react-router-dom'


export default function OutlinedButton ( { type, label, disabled, color, to } ) {

  const classes = useStyles()
  // const renderLink = React.useMemo( () =>
  //   React.forwardRef( ( linkProps, ref ) => (
  //     <Link to={ to } { ...linkProps } ref={ ref } />
  //   ) ), [to]
  // )

  return (
    <div>
      <Button
        type={ type }
        disabled={ disabled }
        color={ color }
        variant="outlined"
        className={ classes.button }
        // component={ renderLink }
      >
        { label }
      </Button>
    </div>
  )
}


const useStyles = makeStyles( theme => ( {
  button: {
    margin: theme.spacing( 1 )
  },
  input: {
    display: 'none'
  }
} ) )