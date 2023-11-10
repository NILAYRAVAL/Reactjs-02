import React, { Component, createRef } from 'react'

export default class ClassUncontrolled extends Component {
    constructor(props) {
      super(props)
    this.nameRef = createRef()
    this.ageRef = createRef()  
    }

    componentDidMount(){
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.nameRef.current.focus()
    }

    handleSubmit =(e)=> {
          e.preventDefault();          // stop Reloading page
          console.log('Name =',this.nameRef.current.value);
          console.log('Age =',this.ageRef.current.value);

         {/* Without using Ref we can also perform  */}
          let email = document.getElementById('Email').value
          console.log('Email = ',email);
    }
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
         
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' placeholder='Enter Your Name' ref={this.nameRef} />
        <br/><br/>
        <label htmlFor=''> Enter the Age: </label>
        <input type='number' placeholder='Enter Your Age' ref={this.ageRef} />
        <br/><br/>

          {/* Without using Ref we can also perform  */}
        <label htmlFor=''> Enter the Email: </label>
        <input type='text' placeholder='Enter Your Email' id='Email' />
        <br/><br/>
        <input type='submit' value= "submit"/>
     </form>
      </>
    )
  }
}
