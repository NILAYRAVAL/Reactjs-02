import React, { Component } from 'react'

export default class ClassState extends Component {

    // rconst shortcut
    constructor(props) {
      super(props)
    
      this.state = {
         first: 0
      }
    }

    Increment =()=> {
        this.setState({
            first : this.state.first + 1
        });
    } 

    Decrement =()=> {
        this.setState ({
            first : this.state.first - 1
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.first}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    )
  }
}
