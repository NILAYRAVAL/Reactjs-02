import React from 'react'
import { useState } from 'react'
function UswithArray() {

 let num = [11,22,33,44]
 const [first, setfirst] = useState(num)
 
//   let  changeState =()=> {
//     setfirst([1,2,3,4]);
//  }



// Add Array value when click button

    let changeState =()=> {
        setfirst(previousState =>{

        return [
            ...previousState,
            // 97
            // Math.random() *50              // 0 to 50 with 12.11556465161
            Math.floor(Math.random()*50)     // 0 to 50 with 12, 13, 14
                ]

        });
    }
 return (
    <>
     <ul>{first.map ((n,i) =><li key={i}> {n} </li> )}</ul>
     {/* <button onClick={changeState}> change Array</button> */}
   
       <button onClick={changeState}>Add Array</button>    
    </>
  )
}

export default UswithArray