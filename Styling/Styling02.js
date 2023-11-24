import React, { Component } from 'react'
import './styling02.css'

export default class Styling02 extends Component {
  render() {
    let a = this.props.check ? 'hello' : 'hello2';
    return (
      <>
        <h1 className= {`${a} hello3`}>Hello kese ho aap log </h1>
      </>
    )
  }
}
