import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchTestAction from '../Store/actions/fetchTestAction'
import Users from '../components/Users'

export default function FetchedUsers() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.fetchingReducer.fetchUsers)

  useEffect(() => {
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
