import React from 'react'
import  { useState } from 'react';
import App from '../App';

export default function Toggle() {
    // by default false value set che means hide
    const [Toggle, setToggle] = useState(true) 
  return (
    <div className='App'>
{        
// if state is true then show else hide
   Toggle ?<h1> Your password Hacked</h1>: <h1> Start Password Hacking Process  </h1>
   
}
        <button onClick={() => setToggle(false)}>Hacking</button><br /> 
       <button onClick={() => setToggle(true)}>show-password </button>  <br /> 
       <button onClick={()=> setToggle(!Toggle)}>Toggle</button>
    </div>
  )
}
