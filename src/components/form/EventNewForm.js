import React from 'react'
import { Field, reduxForm } from "redux-form"
import RenderField from './RenderField'
import { Link, Route } from 'react-router-dom'
import { required, length } from '../../helpers/validates/eventForm'
import EventsIndex from './../../pages/EventsIndex'

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
      {/* <Route path="/events" component={ EventsIndex } /> */ }
    </form>
  )
}

export default reduxForm( {
  form: 'eventNewForm'
} )( EventNewForm )