import React, { Component } from 'react';
// Connect State & Actions
import { connect } from 'react-redux';
import _ from 'lodash';
// Link
import { Link } from 'react-router-dom';
// Actions
import { readEvents } from '../actions';


// EventsIndex Component Class
class EventsIndex extends Component {

  // Mounted
  componentDidMount() {
    // Async GET Response
    this.props.readEvents()
  }

  // Events Component Function
  renderEvents() {
    // Events Component
    return _.map(this.props.events, event => (
      // Table Data
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  // EventsIndex Component
  render() {
    return (
      <React.Fragment>
        {/* Table */ }
        <table>
          {/* Table Header */ }
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          {/* Table Body */ }
          <tbody>
            {/* Events Component */}
            { this.renderEvents() }
          </tbody>
        </table>

       {/* Link -> New */}
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  };
}


// Map State
const mapStateToProps = state => ({ events: state.events });
// Map Actions
const mapDispatchToProps = ({ readEvents });
// Connect State & Actions
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
