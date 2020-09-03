const initialState = {
  fetchUsers: []
}

const fetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_LIST_NAME':
      return {
        ...state,
        fetchUsers: state.fetchUsers.concat(action.payload)
      }
    default:
      return state
  }
}

export default fetchingReducer
