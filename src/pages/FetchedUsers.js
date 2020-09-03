import React, { useEffect } from 'react'

// in here this two desctructured object is kinda react redux function to gain access to the store
import { useSelector, useDispatch } from 'react-redux'

// this is how we call the 'function' action inside the store, simply import and dispatch
import fetchTestAction from '../Store/actions/fetchTestAction'

// basic commponent usage
import Users from '../components/Users'

export default function FetchedUsers() {
  //do not forget do this, we have to invoke the dispatch in order to use dispatch
  const dispatch = useDispatch()

  //then here, this is how we access the 'state' inside our store 'reducer'
  // but since our reducer already splited, we have to call the state first, then the reducer's name then the state we want
  const users = useSelector(state => state.fetchingReducer.fetchUsers)

  useEffect(() => {
    //in here, this is mimicing the 'class-component' lifecycle,
    //each time this particular page is mouted, we got the action inside store run
    dispatch(fetchTestAction())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {
        users.map(user => {
          return (
            <Users
              user={user}
              key={user.id}
            />
          )
        })
      }
    </div>
  )
}
