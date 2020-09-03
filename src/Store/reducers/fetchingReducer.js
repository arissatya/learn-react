// this is the 'WAREHOUSE' for fettched data
// this initial state is the cabinet of data
const initialState = {
  fetchUsers: []
}

// this reducer, is kinda the warehouse
// we put the 'initialState' as state default, since that is a default data cabinet (padon my analogy)
// then the action, its how we do things
const fetchingReducer = (state = initialState, action) => { // this has to be pure function, google it
  switch (action.type) { // this action type is to distinguishing what is come, and what to do
    case 'FETCHED_LIST_NAME':
      return {
        ...state, // in here we kinda 'clone' our data from initial state. we cant mutate the default data
        fetchUsers: state.fetchUsers.concat(action.payload) // in here we 'change' the 'cloned' data
      }
    default:
      return state
  }
}

export default fetchingReducer
