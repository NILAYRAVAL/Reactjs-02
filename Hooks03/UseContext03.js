import React, { useContext } from 'react'
import { NameContext, changeContext } from './MainContext'

function UseContext03() {

  const myWork =  useContext(NameContext)
  const myTeam = useContext(changeContext)
  return (
    <div>
        <h1>I'm Component 03</h1>
        <h1>{myWork} {myTeam}</h1>
    </div>
  )
}

export default UseContext03