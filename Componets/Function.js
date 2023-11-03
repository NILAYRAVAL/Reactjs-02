import React from 'react'
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

// function FunctionComponent ()  {
//   return (
//     <>
//     <h3> Function</h3>
//     </>
//   )
// }



let FunctionComponent = ({name}) => {
    const [date, setDate] = useState(null);
    return (
       <>
        <h3>Hello {name}</h3>
        {/* <p>Let's Learn about Functional components</p> */}
       <button onClick={()=> alert ("Ruko muje 100+ karne do ")}>Click me!!</button>
       <br/>
      

       <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
        <br/>
       
        
       </>     
    );
};

export default FunctionComponent