import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import nameReducer from './reducers/nameReducer'
import fetchingReducer from './reducers/fetchingReducer'

const reducers = combineReducers({
  nameReducer, fetchingReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store