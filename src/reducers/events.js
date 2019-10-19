import _ from 'lodash';

// Actions
import { READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT, CREATE_EVENT } from '../actions';

// Events Reducer
export default (events = {}, action) => {

  // Action Types
  switch (action.type) {

    // Create, Read, Update
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      // New Event Data
      const data = action.response.data;
      // Update Events & Add New Event
      return { ...events, [data.id]: data };

    // Read Events
    case READ_EVENTS:
      // Sort Events
      return _.mapKeys(action.response.data, 'id');

    // Delete
    case DELETE_EVENT:
      // Delete Event
      delete events[action.id];
      // Update Events
      return { ...events };

    // Default
    default:
      return events;
  }
};