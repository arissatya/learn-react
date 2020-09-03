
export default function fetchTestAction() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      await response.json()
      // console.log(users)
        .then((users) => {
          dispatch({
            type: 'FETCHED_LIST_NAME',
            payload: users
          })
        })
    } catch (err) {
      console.error(err);
    }
  }
}
