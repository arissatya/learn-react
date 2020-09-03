import React from 'react'

export default function Users({ user }) {
  return (
    <div>
      {user.id}. {user.name}
    </div>
  )
}
