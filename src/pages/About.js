import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const name = useParams().name

  return (
    <div>
      <h1>HELOOOOO FROM <b> {name}'s </b> ABOUT</h1>
    </div>
  )
}
