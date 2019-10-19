import React from 'react';
import ReactDOM from 'react-dom';
// Create Store
import { createStore, applyMiddleware } from 'redux';
// Provider for Store
import { Provider } from 'react-redux';
// Redux Thunk
import thunk from 'redux-thunk';
import './index.css';
// Reducers
import reducer from './reducers';
import EventsIndex from './components/events_index';

// Create Store <- Reducer & Thunk
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
