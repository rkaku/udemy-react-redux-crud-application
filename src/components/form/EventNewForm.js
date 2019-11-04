import React from 'react'
import { Field, reduxForm } from "redux-form"
import RenderField from './RenderField'
import { Link } from 'react-router-dom'
import { required, length } from '../../helpers/validates/eventForm'


function EventNewForm ( props ) {

  const { handleSubmit, pristine, reset, submitting, invalid } = props

  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="title"
        type="text"
        component={ RenderField }
        label="Title"
        validate={ [ required, length ] }
      />
      <Field
        name="body"
        type="text"
        component={ RenderField }
        label="Body"
        validate={ [ required, length ] }
      />
      <div>
        <button
          type="submit"
          disabled={ pristine || submitting || invalid }
        >Submit</button>
        <button
          type="button"
          disabled={ pristine || submitting }
          onClick={ reset }
        >Reset</button>
      </div>
      <Link to="/events">Cancel</Link>
    </form>
  )
}

export default reduxForm( {
  form: 'eventNewForm'
} )( EventNewForm )