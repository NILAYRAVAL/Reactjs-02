import React, { useState } from 'react'

function FunctionState() {
    const [first, setfirst] = useState(0)

    let Increment =()=>{
        setfirst(first +1)
    }

    let Decrement =()=>{
        setfirst(first - 1)
    }
  return (
    <div>
     <h1>{first}</h1>

     <button onClick={Increment}>Increment </button>
     <button onClick={Decrement}>Decrement </button>

    </div>
  )
}

export default FunctionState