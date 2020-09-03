const initialState = {
  listedName: []
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST_NAME':
      return {
        ...state,
        listedName: state.listedName.concat(action.payload)
      }
    case 'CLEAR_LIST_NAME':
      return {
        ...state,
        listedName: []
      }
    default:
      return state
  }
}

export default nameReducer
