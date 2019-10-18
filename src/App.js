import React from 'react';
import { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "Hello";
    // const dom = <h1 className="foo">{ greeting }, World!</h1>;
    // return dom;
    // const input = <input type="button" value="Click" onClick={ () => { console.log("Clicked!") } } />
    // const input = <input type="text" onChange={ () => { console.log("Changed!") } } />;
    // return input;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={ () => { console.log("Changed!") } } />
      </React.Fragment>
    );
  };
}


export default App;
