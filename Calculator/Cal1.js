import React, { useState } from 'react';


function Cal1() {
  const [value, setValue] = useState('');

  return (
    <>
    <div className="text-center mt-3">

            <input className='col-3 py-3' type= "text" value={value}/>
           <br/>  
          <div className="container mt-2" >
            <input className="btn btn-danger waves-effect col-1" type="button" value="AC" onClick={e => setValue('')}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input className="operator btn btn-info col-1" type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div><br/>
          <div className="container">
            <input className="btn btn-light waves-effect col-1" type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input className="operator btn btn-info col-1" type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div><br/>
          <div className="container">
            <input className="btn btn-light waves-effect col-1" type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input className="operator btn btn-info col-1" type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div><br/>
          <div className="container">
            <input className="btn btn-light waves-effect col-1" type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input className="operator btn btn-info col-1" type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div><br/>
          <div className="container">
            <input className="btn btn-light waves-effect col-1" type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input className="btn btn-light waves-effect col-1" type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input  type="button" value="=" className='equal operator btn btn-info col-2' onClick={e => setValue(eval(value))}/>
          </div>
        
      
    </div>
    </>
  );
}

export default Cal1;