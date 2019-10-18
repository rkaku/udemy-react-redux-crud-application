import React from 'react';
import { Component } from 'react';
// Map Connector
import { connect } from 'react-redux';
// Actions Types
import { increment, decrement } from '../actions';


// App Component Class
class App extends Component {

  render() {
    // Props
    const props = this.props;

    // App Component
    return (
      <React.Fragment>
        {/* Connected Props */ }
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    );
  };
}


// Map State -> Props
const mapStateToProps = state => ({ value: state.count.value });

// Map Actions -> Props
const mapDispatchToProps = dispatch => ({
  // Dispatch
  // dispatch(Actions Types) -> Actions -> Props

  // Increment Type
  increment: () => dispatch(increment()),
  // Decrement Type
  decrement: () => dispatch(decrement())
});


// Connect State with Actions
export default connect(mapStateToProps, mapDispatchToProps)(App);


// Store -> Map -> Props
// Map
// => actions/ & reducers/ -> State & Dispatch

// Create & Combine
// => Store <-> Reducers
// Provider
// => index.js -> components/App.js
// Connect
// => State <-> Actions