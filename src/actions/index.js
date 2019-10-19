import axios from 'axios';

// Action Key
export const READ_EVENTS = 'READ_EVENTS';

// Constant
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// Async Action
export const readEvents = () => async dispatch => {
  // GET Response
  const response = await axios.get(`${ ROOT_URL }/events${ QUERYSTRING }`);
  // Dispatch GET Response
  dispatch({ type: READ_EVENTS, response });
};