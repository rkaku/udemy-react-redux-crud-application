import _ from 'lodash';

// Actions
import {
  READ_EVENTS,
  CREATE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions';

// Events Reducer
export default (events = {}, action) => {

  // Action Types
  switch (action.type) {

    // Read Events
    case READ_EVENTS:
      // Sort Events
      return _.mapKeys(action.response.data, 'id');

    // Create, Read, Update
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      // New Event Data
      const data = action.response.data;
      // Update Events & Add New Event <- [ID]: Data
      return { ...events, [data.id]: data };

    // Delete
    case DELETE_EVENT:
      // Delete Event <- ID
      delete events[action.id];
      // Update Events
      return { ...events };

    // Default
    default:
      return events;
  }
};