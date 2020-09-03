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

  //this is the basic function that handling several event in Salam.js
  const handleNewName = () => {
    const newName = nameRef.current.value //we took the input name using redunx ref
    if (newName === '') return
    setName(name.concat(newName)) // in here we simply add the inputed name to local pages 'store'
    dispatch({ //in here we access the store, by call the 'ADD_LIST_NAME' which is kinda a 'method' inside our store
      type: 'ADD_LIST_NAME',
      payload: [newName]
    })
    nameRef.current.value = null //this is just simply to empty or clear the input box
  }

  const clearNameList = () => { //this function is to clear this Salam.js page 'store', and also the reducer's store
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
            name={nama} key={idx} //in here we bind the data, and map it (or iterate) and bind the data each '<Nama/>' components
          />
          // btw try to not using the index, since it dangerous, and dumb
        )
      })}
      <br />
      {/* Here we use the redux ref, to retrieve the data inside input tag
      the 'ref' is how we took it from this input tag, then we reference it to the 'nameRef'
      whic we alreade declare in top level */}
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
