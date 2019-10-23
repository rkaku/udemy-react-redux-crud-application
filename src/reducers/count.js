// Actions Keys
import { INCREMENT, DECREMENT } from '../actions';


// Count Reducer
const countReducer = (state = {}, action) => {

  // Type & Value <- Action
  const { type, value } = action;

  // Switch Types
  switch (type) {

    // Increment Value
    case INCREMENT:
      state = { value: value + 1 }
      return state;

    // Decrement Value
    case DECREMENT:
      state = { value: value - 1 }
      return state;

    // Default
    default:
      return state;
  };
};


export default countReducer;