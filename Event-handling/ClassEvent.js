import React, { Component } from 'react'

export default class ClassEvent extends Component {
        //  handleEvent (){
        // alert ("Let's enjoy Diwali festival");
        //  }

  render() {

        const handleEvent = (name) => {
        alert ("#" + name);
         }

    return (
      <>
        <div>
        {/* <button onClick={this.handleEvent}>Class Me!!</button> */}
        {/* <button onClick={()=>handleEvent ("India is the best")}>Class Me!!</button> */}
        <button onClick={()=>handleEvent (this.props.name)}>Class Me!!</button>
        </div>
      </>
    )
  }
}
