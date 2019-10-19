import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';

// Create Store <- Reducer & Thunk
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // Provider
  <Provider store={ store }>
    {/* Router */ }
    <BrowserRouter>
      {/* Switch */ }
      <Switch>
        {/* Routes */ }
        <Route exact path="/events/new" component={ EventsNew } />
        <Route exact path="/" component={ EventsIndex } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);