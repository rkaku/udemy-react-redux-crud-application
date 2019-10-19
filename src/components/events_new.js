import React, { Component } from 'react';
// Connect Actions
import { connect } from 'react-redux';
// Form & Field
import { Field, reduxForm } from 'redux-form';
// Lind
import { Link } from 'react-router-dom';
// Actions
import { postEvent } from '../actions';


// EventsNew Component Class
class EventsNew extends Component {

  constructor(props) {

    super(props);
    // Bind onSubmit Method
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Field Component
  renderField(field) {
    // Field Data
    const { input, label, type, meta: { touched, error } } = field;

    // Field Component
    return (
      <div>
        <input { ...input } placeholder={ label } type={ type } />
        { touched && error && <span>{ error }:</span> }
      </div>
    );
  }

  // Async Submit Method
  async onSubmit(values) {
    // Post Event Props
    await this.props.postEvent(values);
    // History -> /
    this.props.history.push('/');
  };

  // EventNew Function
  render() {
    // Props -> handleSubmit -> onSubmit
    // Pristine & Submitting
    const { handleSubmit, pristine, submitting } = this.props;

    // EventNew Component
    return (
      // From -> onSubmit -> handleSubmit -> async onSubmit
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        {/* Field -> Title & Body */ }
        <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
        <div><Field label="Body" name="body" type="text" component={ this.renderField } /></div>

        {/* Cancel Button */ }
        <div>
          <input type="submit" value="Submit" disabled={ pristine || submitting } />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  };
}

// Validate
const validate = values => {
  // Errors
  const errors = {};

  // Error -> Title & Body
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  // Return Errors
  return errors;
};


// Map Actions
const mapDispatchToProps = ({ postEvent });
// Connect Actions
export default connect(null, mapDispatchToProps)(
  // Redux From & EventsNew
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
);