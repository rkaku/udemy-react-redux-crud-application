import axios from 'axios';
// Action Key
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

// Constant
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';


// Read Event Action
export const readEvents = () => async dispatch => {
  // Async GET
  const response = await axios.get(`${ ROOT_URL }/events${ QUERYSTRING }`);
  // Dispatch
  dispatch({ type: READ_EVENTS, response });
};

// Post Event Action
export const postEvent = (values) => async dispatch => {
  // Async POST
  const response = await axios.post(`${ ROOT_URL }/events${ QUERYSTRING }`, values);
  // Dispatch
  dispatch({ type: CREATE_EVENT, response });
};