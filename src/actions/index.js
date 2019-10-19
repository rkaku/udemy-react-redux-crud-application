import axios from 'axios';

// Actions Keys
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';


// Constants
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';


// Actions
// Read
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ ROOT_URL }/events${ QUERYSTRING }`);
  dispatch({ type: READ_EVENTS, response });
};

// Post
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ ROOT_URL }/events${ QUERYSTRING }`, values);
  dispatch({ type: CREATE_EVENT, response });
};

// Put
export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ ROOT_URL }/events/${ values.id }${ QUERYSTRING }`, values);
  dispatch({ type: UPDATE_EVENT, response });
};

// Get
export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ ROOT_URL }/events/${ id }${ QUERYSTRING }`)
  dispatch({ type: READ_EVENT, response });
};

// Delete
export const deleteEvent = id => async dispatch => {
  // DELETE
  await axios.delete(`${ ROOT_URL }/events/${ id }${ QUERYSTRING }`);
  // Dispatch
  dispatch({ type: DELETE_EVENT, id });
};