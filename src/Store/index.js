// as we can see we use three redux's feature,
// we use the 'createStore' to generate our store
// use the applyMidleware to use the actions inside store
// then we use 'combineReducers' to connect all splited reducers
import { createStore, applyMiddleware, combineReducers } from 'redux'

// yet, we need this thunk things, to handle th async action.
import thunk from 'redux-thunk'

// this is the splited reducers name, we import it to here the we combine it in here
import nameReducer from './reducers/nameReducer'
import fetchingReducer from './reducers/fetchingReducer'

// this is how combine the splited reducers
// we wrap it inside combine reducers as an object
const reducers = combineReducers({
  nameReducer, fetchingReducer
})

// in here we create our store. so first we invoke the createStore. it needs three parametes, yet we just use two here
// but its fine..
// as you can see, we put our reducer first, basicly this is the 'WAREHOUSE' of our state,
// but also the 'SETTER' (this is my personal analogy) method
// and then the applyMiddleware, we use thunk to handle all async action from our store.. i guess..
const store = createStore(reducers, applyMiddleware(thunk))

// dont forget to export kay
export default store