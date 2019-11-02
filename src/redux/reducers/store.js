import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from "redux-form"
import events from './events'

const rootReducer = combineReducers( { form: reducer, events } )
export const store = createStore( rootReducer, applyMiddleware( thunk ) )