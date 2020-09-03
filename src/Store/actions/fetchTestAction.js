// this is the basic action
export default function fetchTestAction() {
  // this is how to do vanilla js async fetch
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      await response.json()
      // after waiting the data fetched and formed, we use .then
      // why? so the promise fulfilled, btw the data is already passed in .then
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
