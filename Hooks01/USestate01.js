import React, { useState } from 'react'

function USestate01() {

  const myArray = useState("Nilay")
    
   const changeState =()=> {myArray[1]("change value execute");}


    
  return (
    <>
       <h1>{myArray [0]}</h1>
      

       {/* <button onClick={ () => myArray[1]("Frontend developer")}> Updation</button> */}

        <button onClick={changeState}> Updation</button>

        
        

    </>
  )
}

export default USestate01