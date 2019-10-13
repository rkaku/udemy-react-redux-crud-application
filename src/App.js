import React from 'react';
// import { Component } from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="Click">Foo</label>
//         <input id="Click" value="Bar" type="button" onClick={() => console.log('I am clicked!')} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {
      name: 'Taro',
      age: 10
    },
    {
      name: 'Hanako',
      age: 5
    },
    {
      name: 'NoName',
      age: 3
    }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am { props.name }, { props.age } years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// function App() {
//   return (
//     <h1>
//       Hello, World!
//     </h1>
//   );
// }

export default App;
