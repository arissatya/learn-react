import React from 'react'

// this is the 'redirect' way for our user using react router dom
import { useHistory } from 'react-router-dom'

export default function Nama({ name }) { //btw we can tho this, instead using props, we can just destructure it here
  // dont forget this, INVOKE THE feature
  const history = useHistory()

  function goToName() {
    // here we push and stick the params to the link
    history.push('/about/' + name)
  }

  return (
    <div>
      <button onClick={goToName}>
        clik here to see {name}'s about
      </button>
    </div>
  )
}
