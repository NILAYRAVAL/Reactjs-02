import React, { Component } from 'react'

export default class BindingEvent extends Component {

        constructor (){
        super ();
        // this.HandleClick = this.HandleClick.bind(this);
        this.state = {
            name: "Nilay",
          
        }
        }
    
        // HandleClick (){
        //     // console.log("Hello ", this);
        //          this.setState ({
        //         name: "King",
        //     });
        // }

        HandleClick =()=>{
            this.setState({
                name: "Konfu King",
            })
        }

  render() {
    return (
      <>
          <div>
          <h1>{this.state.name}</h1>
            {/* <button onClick={this.HandleClick}>Click for review</button> */}
            {/* <button onClick={this.HandleClick.bind(this)}>Click for review</button>    */}
            {/* <button onClick={this.HandleClick}>Click for review</button> */}
            <button onClick={ ()=> this.HandleClick()}>Click for review</button>
            

          </div>

      </>
    )
  }
}
























class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  