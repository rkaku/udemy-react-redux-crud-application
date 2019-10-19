import axios from 'axios';

// Actions Keys
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENT = 'READ_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';


// Constants
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';


// Actions
// Read
export const readEvents = () => async dispatch => {
  // GET Response
  const response = await axios.get(`${ ROOT_URL }/events${ QUERYSTRING }`);
  // Dispatch -> Type & Response
  dispatch({ type: READ_EVENTS, response });
};

// Post -> Values
export const postEvent = values => async dispatch => {
  // POST Response
  const response = await axios.post(`${ ROOT_URL }/events${ QUERYSTRING }`, values);
  // Dispatch -> Type & Response
  dispatch({ type: CREATE_EVENT, response });
};

// Get -> ID
export const getEvent = id => async dispatch => {
  // GET Response
  const response = await axios.get(`${ ROOT_URL }/events/${ id }${ QUERYSTRING }`)
  // Dispatch -> Type & Response
  dispatch({ type: READ_EVENT, response });
};

// Put -> Values
export const putEvent = values => async dispatch => {
  // PUT Response
  const response = await axios.put(`${ ROOT_URL }/events/${ values.id }${ QUERYSTRING }`, values);
  // Dispatch -> Type & Response
  dispatch({ type: UPDATE_EVENT, response });
};

// Delete -> ID
export const deleteEvent = id => async dispatch => {
  // DELETE
  await axios.delete(`${ ROOT_URL }/events/${ id }${ QUERYSTRING }`);
  // Dispatch -> Type & ID
  dispatch({ type: DELETE_EVENT, id });
};