import React, { Component } from 'react'

export default class Styling01 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         active: false
      }
    }

    Changestate =()=> {

        this.setState ({
            active: true
        });

       };

  render() {

    // let obj = {
    //     //  color: 'red',
    //      backgroundColor: 'yellow',
    // }

    let obj1 = {
        color: 'red',
        backgroundColor: 'yellow',
   }
     if (this.state.active) {
         obj1.backgroundColor = 'black';
         obj1.color ='white'

     }

    return (
      
      <>
           {/* <h1 style={{color: 'red',backgroundColor: 'blueviolet'}} > Learn reactjs from me </h1> */}
           {/* <h1 style={obj} > Learn reactjs from me </h1> */}
           {/* <h1 style={{...obj, ...obj1}} > Learn reactjs from me </h1> */}

           <button style={obj1} onClick={this.Changestate}> Click me!!</button>

      </>
    )
  }
}
