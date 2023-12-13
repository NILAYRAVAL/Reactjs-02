import React, { useEffect, useRef, useState } from 'react'

function UserefHook2() {

    const [inputValue, setinputValue] = useState('')
    
    // const [count, setcount] = useState(0)
    //   useEffect(()=>{
    //     setcount(count+1);
    //   }, []);

   const count = useRef(0);
   useEffect(()=> {
    console.log(count.current)
    count.current = count.current + 1;
   });
  return (
    <>
        <h1>Learn about UseRef-Hook part2</h1>

        <form >
         <label htmlFor=''>Enter First Name:</label>
         <input type='text' placeholder='Enter First Name' value={inputValue} 
         // without onchange we can't write anything in textfield
         onChange={(e)=> setinputValue(e.target.value)} />     
         <br/><br/>
        
         <h1>Render count : {count.current}</h1>
         <h2>Data : {inputValue}</h2>
        </form>
    </>
  )
}

export default UserefHook2