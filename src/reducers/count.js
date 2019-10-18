// Actions
import { INCREMENT, DECREMENT } from '../actions';


// Initial State
const initialState = { value: 0 };


// Reducer
export default (state = initialState, action) => {

  // Action -> State
  switch (action.type) {

    // Plus One
    case INCREMENT:
      return { value: state.value + 1 };

    // Minus One
    case DECREMENT:
      return { value: state.value - 1 };

    // Default
    default:
      return state;
  }
};