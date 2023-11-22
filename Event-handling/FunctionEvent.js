import React from 'react'
import App from '../App';

// function FunctionEvent() {
function FunctionEvent(props) {
 
      // function handleEvent (){
      // alert ("Let's enjoy Diwali festival");
          // }
          const handleEvent = (name) => {
          alert ("Hello " + name);
        }

  return (
    <>
    <div className='App'>
      {/* <button onClick={handleEvent}>function Me!!</button> */}
      {/* <button onClick={ () => handleEvent("Nilay")}>function Me!!</button> */}

                   {/* Passing props */}
      <button onClick={ () => handleEvent(props.name)}>function Me!!</button>
      </div>
    </>
  )
}

export default FunctionEvent