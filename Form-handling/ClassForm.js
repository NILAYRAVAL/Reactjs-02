

// Learn about Controlled Component With Class Component  1st Approach

import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'Nilay',
      }
    }

    
    handlerform =(n)=>{          // (n) (Event object) is nothing but store the input type value and display in screen

        // console.log(n.target.value);     // n.target.value used to target ====>>> <input type= '' value = {}>
       
        this.setState ({                 // without Updation we cannot Enter and add text in the text field

            // substring() used to define the min to max text limit
            data: n.target.value.toUpperCase().substring(0,11)
        });
    }

    handlerformSubmision =(n)=>{
        // Because of html code page should reload due to this reason our data can not be visible in console.log
        //   console.log(n);
        //  By solving this issue we use below step for visibility 
        n.preventDefault()

        console.log(n.target[0].value.toLowerCase())        // n.target[o] == oth position of <input type = 'text'>
    }
  render() {
    return (
      <>
     {/* <form>
         <h1>{this.state.data}</h1>
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' value={this.state.data} onChange= {this.handlerform } />
        <br/>
        <input type='submit' value= "submit"/>
     </form> */}

     <form onSubmit={this.handlerformSubmision}>
         <h1>{this.state.data}</h1>
        <label htmlFor=''> Enter the Name: </label>
        <input type='text' value={this.state.data} onChange= {this.handlerform } />
        <br/>
        <input type='submit' value= "submit"/>
     </form>


      </>
    )
  }
}
