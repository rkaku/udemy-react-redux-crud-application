import React from 'react'
import { Field, reduxForm } from "redux-form"
import RenderField from './RenderField'
import { required, length } from '../../helpers/validates/eventForm'
import Button from './../button/OutlinedButton'
import CancelButton from './../button/CancelButton'


function EventNewForm ( props ) {
  const { handleSubmit, pristine, submitting, invalid } = props

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
        <Button
          type="submit"
          label="Submit"
          color="primary"
          disabled={ pristine || submitting || invalid }
        />
      </div>
      <CancelButton to="/events" />
    </form>
  )
}

export default reduxForm( {
  form: 'eventNewForm'
} )( EventNewForm )