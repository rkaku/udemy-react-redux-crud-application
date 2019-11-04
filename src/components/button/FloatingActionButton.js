import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'


export default function FloatingActionButtons ( props ) {

  const classes = useStyles()
  const { to } = props

  const renderLink = React.useMemo( () =>
    React.forwardRef( ( linkProps, ref ) => (
      <Link to={ to } { ...linkProps } ref={ ref } />
    ) ), [ to ]
  )

  return (
    <Fab
      color="primary"
      aria-label="add"
      className={ classes.fab }
      component={ renderLink }
    >
      <AddIcon />
    </Fab>
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