import React from 'react';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="Click">Foo</label>
        <input id="Click" value="Bar" type="button" onClick={() => console.log('I am clicked!')} />
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <h1>
//       Hello, World!
//     </h1>
//   );
// }

export default App;
