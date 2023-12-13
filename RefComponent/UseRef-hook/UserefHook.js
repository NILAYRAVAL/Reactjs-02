import React, { useEffect, useRef } from 'react'

function UserefHook() {
   const newRef = useRef();


   const firstRef = useRef();
   const lastRef = useRef();
   
   useEffect( ()=>{
    console.log(newRef);
    console.log(newRef.current.innerHTML);

   console.log(firstRef);
   console.log(lastRef);
   firstRef.current.focus();
   firstRef.current.style.color = 'blue'
   

   });

   const HandleHeading = ()=>{
      newRef.current.style.color = 'red';
      newRef.current.style.fontFamily = 'cursive';
      newRef.current.style.textAlign = 'center';
   }

   const handleSubmit= (e)=> {
    e.preventDefault();
    console.log('Full Name = ', firstRef.current.value, lastRef.current.value);
   }
  return (
    <>
        <h1 ref={newRef}>Learn about UserefHook in Reactjs</h1>
        <button onClick={HandleHeading}>Click for change</button>
        <br/><br/><br/>

        <form onSubmit={handleSubmit}>
         <label htmlFor=''>Enter First Name:</label>
         <input type='text' ref={firstRef} placeholder='Enter First Name'/>
         <br/><br/>
         <label htmlFor=''>Enter Last Name:</label>
         <input type='text' ref={lastRef} placeholder='Enter Last Name'/>
         <br/><br/>
         <input type='submit' value='submit'/>

        </form>
    </>
  )
}

export default UserefHook