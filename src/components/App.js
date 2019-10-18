import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';


// App Component Class
class App extends Component {
  render() {
    const props = this.props;

    // App Component
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
