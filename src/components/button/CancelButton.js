import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'



export default function FloatingActionButtons ( props ) {

  const { to } = props
  const classes = useStyles()
  const renderLink = React.useMemo( () =>
    React.forwardRef( ( linkProps, ref ) => (
      <Link to={ to } { ...linkProps } ref={ ref } />
    ) ), [ to ]
  )

  return (
    <Button
      to={ to }
      color="secondary"
      aria-label="Cancel"
      component={ renderLink }
    >
      Cancel
    </Button>
  )
}


const useStyles = makeStyles( theme => ( {
  fab: {
    margin: theme.spacing( 1 ),
    position: 'fixed',
    right: 25,
    bottom: 25,
  }
} ) )