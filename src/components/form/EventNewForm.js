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
        type="text"
        name="title"
        label="Title"
        component={ RenderField }
        validate={ [ required, length ] }
      />
      <Field
        type="text"
        name="body"
        label="Body"
        component={ RenderField }
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