import React, { Component } from 'react'

export default class CallbackRefCompo extends Component {
    constructor(props) {
      super(props)
    
      this.myRef = null;
      this.setMyRef = (e)=>{
       this.myRef = e;
      }  
    }

     componentDidMount(){
        console.log(this.myRef);
        this.myRef.focus()            // not need .current
        this.myRef.style.color = 'blue'           // not need .current 
                       // not need .current
     }

     handlesubmit = (e)=> {
     e.preventDefault();
     this.myRef.style.backgroundColor = 'yellow'
     console.log('Name = ',this.myRef.value);

     }

  render() {
    return (
      <>
      <form onSubmit={this.handlesubmit}>
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' ref={this.setMyRef} placeholder='Enter Your Name'  />
        <br/><br/>
       <input type='submit' value = 'submit'/>
       </form>
      </>
    )
  }
}
