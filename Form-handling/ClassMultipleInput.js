import React, { Component } from 'react'

export default class ClassMultipleInput extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: '',
     email: ''
  }

}
//   handleName = (e)=> {
//     this.setState ({
//         name: e.target.value
//     });
//   }

//   handleEmail = (e)=> {
//     this.setState ({
//         email: e.target.value
//     });
//   }

   handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value= e.target.value
    const name= e.target.name
    this.setState ({
       [name]:value
    });
   }
  

  render() {
    return (
      <>
     <form>
         {/* <h1>{this.state.data}</h1> */}
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Enter Your Name' />
        <br/><br/>
        <label htmlFor=''> Enter the Name: </label>
        <input type='Email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Enter Your Email' />
        <br/><br/>
        <input type='submit' value= "submit"/>
     </form>

      </>
    )
  }
}