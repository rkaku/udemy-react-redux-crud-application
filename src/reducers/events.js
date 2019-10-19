import _ from 'lodash';
// Action Key
import { READ_EVENTS } from '../actions';


// Events Reducer
export default (events = {}, action) => {

  // Action Type
  switch (action.type) {
    // Read Events Type
    case READ_EVENTS:
      // Sorted Data
      return _.mapKeys(action.response.data, 'id');
    // Default Type
    default:
      return events;
  }
};