import React, {  useEffect, useState } from 'react'

function FunctionEffect() {
    
    const [count, setcount] = useState(0)
    const [name, setname] = useState("Nilay")
    
//     useEffect (()=> {
//     console.log("Hey I am Effect " + count);
//   },[count])
    
        useEffect (()=> {
         console.log("Hey I am Effect " + count);
       },[count])

       useEffect (()=> {
        console.log("Hey my name is " + name);
      },[name])

  return (
    <>
  <h1>{count}</h1>
  <button onClick={()=> setcount(count+1)}> Update state</button>
  <h1>{name}</h1>
 <button onClick={()=> setname("Raval")}>Update Name</button>
    </>
  )
}

export default FunctionEffect