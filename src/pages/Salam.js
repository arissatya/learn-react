// THE MAIN REACT SYSTEM
import React, { useState, useRef } from 'react';

// SYSTEM TO ACCESS REDUX STORE
import { useSelector, useDispatch } from 'react-redux'

// THE SMALLER COMPONENT THAT REUSEABLE
import Nama from '../components/Nama'
import NamaDiStore from '../components/NamaDiStore'

// THE HOOKS, ITS ONLY SAY SALAM IN LOG
import useWelcome from '../hooks/useWelcome'

function Salam() {
  // REACT USESTATE AND USE REFF
  // the main react usage, or maybe basic.. i guess
  const [name, setName] = useState([])
  const nameRef = useRef()

  //this hooks only like this, because its empty hooks and only call react useEffect
  // use effect functionality is kinda like a 'CLASS_COMPONENTS' life-cycle 'COMPONENTDIDMOUNT'
  useWelcome()

  //we have to call / invoke react-redux selector and dispatc before use it
  // accessing reducer via this 'useDispatch'
  const dispatch = useDispatch()

  //accesing state in store via this 'useSelector
  const listedName = useSelector(state => state.nameReducer.listedName)

  const handleNewName = () => {
    const newName = nameRef.current.value
    if (newName === '') return
    setName(name.concat(newName))
    dispatch({
      type: 'ADD_LIST_NAME',
      payload: [newName]
    })
    nameRef.current.value = null
  }

  const clearNameList = () => {
    setName([])
    dispatch({
      type: 'CLEAR_LIST_NAME'
    })
  }

  return (
    <>
      <p>store local di pages</p>
      {name.map((nama, idx) => {
        return (
          <Nama
            name={nama} key={idx}
          />
        )
      })}
      <br />
      <input ref={nameRef} type="text" />
      <br />
      <button onClick={handleNewName} >change</button>
      <button onClick={clearNameList} >clear</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <td>
              <b>LIST NAMA DI STORE</b>
            </td>
          </tr>
        </thead>
        <tbody>
            {listedName.map((name, idx) => {
              return (
                <NamaDiStore
                  key={idx} name={name}
                />
              )
            })}
        </tbody>
      </table>
    </>
  )
}

export default Salam
