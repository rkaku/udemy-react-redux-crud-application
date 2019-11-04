import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Field, reduxForm } from "redux-form"
import RenderField from './RenderField'
import { Link, withRouter } from 'react-router-dom'
import { required, length } from '../../helpers/validates/eventForm'
import { eventEdit } from './../../redux/creators/events'


let EventEditForm = ( props ) => {

  const { handleSubmit, load, pristine, reset, submitting, invalid } = props
  const item = useSelector( state => state.events.item )
  React.useEffect( () => {
    load( item )
  }, [ item, load ] )

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

EventEditForm = reduxForm( {
  form: 'eventEditForm'
} )( EventEditForm )

EventEditForm = withRouter( connect(
  state => ( { initialValues: state.events.item } ),
  { load: eventEdit }
)( EventEditForm ) )

export default EventEditForm