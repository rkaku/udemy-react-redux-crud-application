import React, { Component } from 'react';
// Connect State & Actions, Redux Form and EventsShow
import { connect } from 'react-redux';
// Field Component & Redux Form Setting
import { Field, reduxForm } from 'redux-form';
// Lind
import { Link } from 'react-router-dom';
// Actions
import { getEvent, deleteEvent, putEvent } from '../actions';


// EventsShow Component Class
class EventsShow extends Component {

  constructor(props) {
    super(props);
    // Bind onSubmit Method
    this.onSubmit = this.onSubmit.bind(this);
    // Bind onDeleteClick Method
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // Mounted
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  // Field Component Function
  renderField(field) {
    // Redux Field Props
    const { input, label, type, meta: { touched, error } } = field;

    // Field Component
    return (
      <div>
        <input { ...input } placeholder={ label } type={ type } />
        { touched && error && <span>{ error }:</span> }
      </div>
    );
  }

  // Async onDeleteClick Method
  async onDeleteClick() {
    // Props -> Match -> Params -> ID
    const { id } = this.props.match.params;
    // Action -> deleteEvent
    await this.props.deleteEvent(id);
    // History -> /
    this.props.history.push('/');
  };

  // Async onSubmit Method
  async onSubmit(values) {
    // Action -> putEvent
    await this.props.putEvent(values);
    // History -> /
    this.props.history.push('/');
  };

  // EventsShow Component Function
  render() {
    // Props
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    // EventsShow Component
    return (
      // Form -> onSubmit -> handleSubmit -> async onSubmit
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        {/* Field Component -> Title, Body */ }
        <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
        <div><Field label="Body" name="body" type="text" component={ this.renderField } /></div>

        <div>
          {/* Submit Button */ }
          <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } />
          {/* Cancel Button */ }
          <Link to="/">Cancel</Link>
          {/* Delete Button */ }
          <Link to="/" onClick={ this.onDeleteClick }>Delete</Link>
        </div>
      </form>
    );
  };
}


// Validate
const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
};

// Map State
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
}
// Map Actions
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent });
// Connect State & Actions -> Redux From -> EventsShow
export default connect(mapStateToProps, mapDispatchToProps)(
  // Redux From -> Validate, FormName, Reinitialize
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
);