import React, { Component, createRef } from 'react'

export default class ClassRef extends Component {
constructor(props) {
  super(props)

  this.myRef = createRef();
  this.myRef2 = createRef();
}
    // After render all process this component will Run 
    componentDidMount(){
    console.log(this.myRef);
    console.log(this.myRef2);
    // console.log(this.myRef.current.innerHTML)
 }

  handleHeading =()=> {
    // this.myRef.current.align = "right"
    this.myRef.current.style.color = "blue"
    this.myRef.current.style.backgroundColor = "yellow"
    this.myRef2.current.style.backgroundColor = "red"
  }

  render() {
    return (
      <>
        <h1 ref={this.myRef}> Learn about UseRef in React</h1>
        <h1 ref={this.myRef2}> Learn about UseRef2 in React</h1>
        <button onClick={this.handleHeading}>Click</button>

      </>
    )
  }
}
