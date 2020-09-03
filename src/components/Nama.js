import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Nama({ name }) {
  const history = useHistory()

  function goToName() {
    history.push('/about/' + name)
  }

  return (
    <div>
      <button onClick={goToName}>
        waalaikum salam, clik di tombol {name}
      </button>
    </div>
  )
}
