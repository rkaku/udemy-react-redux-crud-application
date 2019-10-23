import React, { useReducer, useState } from 'react';


// Counter Component Class
const Counter = () => {

  // Initialize Data
  const [count, setCount] = useState(0);

  // Plus Button Method
  const handlePlusButton = () => {
    setCount({ count: this.state.count + 1 });
  };

  // Minus Button Method
  const handleMinusButton = () => {
    setCount({ count: this.state.count - 1 });
  };

  // Counter Component
  return (
    <React.Fragment>
      { /* Counter Display */ }
      <div>counter: { count }</div>
      { /* Plus Button */ }
      <button onClick={ handlePlusButton }>+1</button>
      { /* Minus Button */ }
      <button onClick={ handleMinusButton }>-1</button>
    </React.Fragment>
  );
};


export default Counter;