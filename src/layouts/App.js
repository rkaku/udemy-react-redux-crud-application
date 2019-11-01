import React from 'react'
import './../styles/App.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './../redux/reducers/index'
import EventsIndex from './../pages/EventsIndex'

export default function Container () {

  function App () {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <EventsIndex />
      </div>
    )
  }

  const store = createStore( reducer, applyMiddleware( thunk ) )
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  )
}