// Combine Helper
import { combineReducers } from 'redux';
// Count Reducer
import count from './count';

// Combine Reducers with Store
export default combineReducers({ count });