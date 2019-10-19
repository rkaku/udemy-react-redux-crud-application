import _ from 'lodash';
// Action Key
import { READ_EVENTS } from '../actions';

// Event Reducer
export default (events = {}, action) => {

  // Action Types
  switch (action.type) {

    // Read Event Type
    case READ_EVENTS:
      // Return Sorted Data
      return _.mapKeys(action.response.data, 'id');

    // Default Type
    default:
      return events;
  }
};