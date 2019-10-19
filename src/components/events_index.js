import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { readEvents } from '../actions';


// EventsIndex Component Class
class EventsIndex extends Component {

  // Mounted
  componentDidMount() {
    this.props.readEvents()
  }

  // Events Component Function
  renderEvents() {
    // Events Component
    return _.map(this.props.events, event => (
      // Table Data
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>
          {/* Link */ }
          <Link to={ `/events/${ event.id }` }>
            { event.title }
          </Link>
        </td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  // EventsIndex Component Function
  render() {
    // EventsIndex Component
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
            {/* Events Component */ }
            { this.renderEvents() }
          </tbody>
        </table>

        {/* New Event Link */}
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  };
}


// Map State
const mapStateToProps = state => ({ events: state.events });
// Map Actions
const mapDispatchToProps = ({ readEvents });
// Connect State & Actions -> EventsIndex
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);