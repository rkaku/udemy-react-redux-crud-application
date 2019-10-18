import React from 'react';
import { Component } from 'react';


// Counter Component Class
class Counter extends Component {

  constructor(props) {
    super(props);
    // Initialize Data
    this.state = { count: 0 };
  };

  // Plus Button Method
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Minus Button Method
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // Counter Component
    return (
      <React.Fragment>
        { /* Counter Display */ }
        <div>counter: { this.state.count }</div>
        { /* Plus Button */ }
        <button onClick={ this.handlePlusButton }>+1</button>
        { /* Minus Button */ }
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    );
  };
};


export default Counter;