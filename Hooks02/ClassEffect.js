import React, { Component } from 'react'

export default class ClassEffect extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       first: 0
    }
  }

    componentDidMount(){
        console.log("ComponentDidMount called");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
    }

     updatecount =()=>{
       this.setState ({
        first : this.state.first + 1
       })
  }
    
  render() {
    return (
      <>
    <h1>{this.state.first}</h1>
    <button onClick={this.updatecount}>Update</button>

      </>
    )
  }
}
