
// Controlled Component With Function Component & useState     1st Approach

import React, { useState } from 'react'

function FunctionForm() {
    const [first, setfirst] = useState(" ")

    const hadelSubmit = (e) =>
    {
        e.preventDefault()
        console.log(e.target[0].value);    // target = Form, [0][1] input type, value= which provided by user
        alert(e.target[0].value); 
    }
  return (
    <>
    {/* Using Onchange event */}

   {/* <form>   
         <h1>{first}</h1>
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' value={first} onChange={(e) => setfirst(e.target.value.toLowerCase().substring(0,11).replace('&','-'))} />
        <br/>
        <input type='submit' value= "submit"/>
    </form> */}


    {/*Using OnSubmit Event */}
     
    <form onSubmit={hadelSubmit}>   

         <h1>{first}</h1>
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' value={first} onChange={(e) => setfirst(e.target.value.toLowerCase().substring(0,11).replace('&','-'))} />
        <br/>
        <input type='submit' value= "submit"/>
    </form>

    </>
  )
}

export default FunctionForm