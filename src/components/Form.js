import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Prompt, Link } from "react-router-dom"
import TextField from "./TextField"
import Button from './Button'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function Form() {
  const classes = useStyles()
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')

  const handleTitleChange = React.useCallback((event) => {
    setTitle(event.target.value)
  }, [])
  const handleBodyChange = React.useCallback((event) => {
    setBody(event.target.value)
  }, [])
  const prompt = React.useCallback(() => {
    return !title && !body
  }, [body, title])
  const message = React.useCallback((location) => {
    return location.pathname.startsWith('/events/new') ? true : 'Are you sure ?'
  }, [])

  return (
    <React.Fragment>
      <form className={ classes.container } noValidate autoComplete="off">
        <TextField
          value={ title }
          handleChange={ handleTitleChange }
          error={ false }
          helperText={ "" }
          multiline={ false }
          label={ "Title" }
          placeholder={ "Title" }
          rows={ 1 }
        />
        <TextField
          value={ body }
          handleChange={ handleBodyChange }
          error={ false }
          helperText={ "" }
          multiline={ true }
          label={ "Body" }
          placeholder={ "Body" }
          rows={ 1 }
        />

        <div>
          <Prompt when={ prompt() } message={ (location) => message(location) }></Prompt>
          <Button
            variant={ "contained" }
            color={ "secondary" }
            disabled={ false }
            component={ Link }
            to={ "/events" }
            className={ classes.button }
            buttonLabel={ "Cancel" }
          />
          <Button
            variant={ "contained" }
            color={ "primary" }
            disabled={ false }
            component={ Link }
            to={ "/events" }
            className={ classes.button }
            buttonLabel={ "Submit" }
          />
        </div>
      </form>
    </React.Fragment>
  )
}

/** TextField
|--------------------------------------------------
| error, helperText, multiline, label, placeholder, rows
|--------------------------------------------------
*/

/** Button
|--------------------------------------------------
| variant, color, disabled, component, to, buttonLabel
|--------------------------------------------------
*/