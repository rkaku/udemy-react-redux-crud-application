import React, { useReducer } from 'react';
import {
  INCREMENT,
  DECREMENT
} from '../actions';
import reducers from '../reducers';

// App Component Class
const App = () => {

  const initialState = {
    countReducer: { value: 0 }
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  const increment = () => {
    dispatch({
      type: INCREMENT,
      value: state.countReducer.value
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT,
      value: state.countReducer.value
    });
  };

  // App Component
  return (
    <>
      {/* Connected Props */ }
      <div>value: { state.countReducer.value }</div>
      <button onClick={ increment }>+1</button>
      <button onClick={ decrement }>-1</button>
    </>
  )
}


export default App;