import React from 'react';

// App Component
const App = () => {

  // Profiles
  const profiles = [
    {
      name: 'Taro',
      age: 10
    },
    {
      name: 'Naomi',
      age: 5
    },
    {
      name: 'NoName'
    }
  ]

  // Return App Component
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

// User Component
const User = (props) => {
  // Return User Component
  return <div>Hi, I am { props.name }, { props.age } years old!</div>
}

// Default Props
User.defaultProps = {
  age: 1
}

// const App = () => {
//   return (
//     <div>
//       <User name={ "Taro" } age={ 10 } />
//       <User name={ "Naomi" } age={ 5 } />
//     </div>
//   );
// };

// const User = (props) => {
//   return <div>{ props.name } : { props.age }</div>;
// };

export default App;
