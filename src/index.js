import React from 'react';
import ReactDOM from 'react-dom';
// Redux Store
import { createStore } from 'redux';
// Store Provider
import { Provider } from 'react-redux';
import './index.css';
// Reducer
import reducer from './reducers';
import App from './components/App';

// Store <- Reducer
const store = createStore(reducer);

ReactDOM.render(

  // Store Provider Component
  <Provider store={ store }>
    { /* App Component */}
    <App />
  </Provider>,

  document.getElementById('root')
);