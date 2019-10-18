// Actions Keys
import { INCREMENT, DECREMENT } from '../actions';


// Initial State
const initialState = { value: 0 };


// Count Reducer
export default (state = initialState, action) => {

  // Actions Types
  switch (action.type) {

    // Increment Type
    case INCREMENT:
      // Return Increment Action
      return { value: state.value + 1 };

    // Decrement Type
    case DECREMENT:
      // Return Decrement Action
      return { value: state.value - 1 };

    // Default Type
    default:
      // Return Default State
      return state;
  }
};