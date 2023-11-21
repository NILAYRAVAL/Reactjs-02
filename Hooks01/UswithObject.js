import React from 'react'
import { useState } from 'react'

function UswithObject() {

    let obj = {
        name: "Nilay",
        age: 22,
        height: 6.4,
        isYoung: true
    }

    const [first, setfirst] = useState(obj)

    // let changeState =()=> {
    //     setfirst ({
    //         name: "King Kong 3",
    //         age: 100,
    //         height: 200,
    //         isYoung:false
    //     })
    // }


    //  If we want to update only specific value than use this method

    let changeState = () => {

        setfirst(previousState => {

            return{

                ...previousState,
                name : "Leo Das"
            }
        });
    }

  
    return (
    <>
   <h1>{first.name }</h1>
   <h1>{first.age}</h1>
   <h1>{first.height}</h1>
   <h1>{first.isYoung.toString()}</h1>

   <button onClick={changeState}> updation</button>

    </>
  )
}

export default UswithObject