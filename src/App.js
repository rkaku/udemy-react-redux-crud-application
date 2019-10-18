import React from 'react';
// Prop Types
import PropTypes from 'prop-types';

// App Component
const App = () => {

  // Profiles
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

  // Return App Component
  return (
    <div>
      {
        // Profiles -> User Component
        profiles.map((profile, index) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        })
      }
    </div>
  )
}

// User Component
const User = (props) => {
  // Return User Component
  return <div>Hi, I am { props.name }, { props.age } years old!</div>
}

// Prop Types
User.propTypes = {
  // Name
  name: PropTypes.string,
  // Age
  age: PropTypes.number.isRequired
}

export default App;
