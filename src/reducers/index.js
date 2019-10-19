import { combineReducers } from 'redux';
// From Reducer
import { reducer as form } from 'redux-form';
// Events Reducer
import events from './events';


// Combine Store with Reducers
export default combineReducers({ events, form });