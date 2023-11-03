import React from 'react'
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
// import { Component } from 'react'


// function Class() {
//   return (
//     <>
//     <h3> Class</h3>
//     </>
//   )
// }


class Class extends React.Component {
    
    constructor(props){
        super(props);
        // this.state = { Date: new Date()};
        this.state = { Data: "6 Balls , 18 Runs Left (What you think about INDIA (Win or Loss))",b: "Rohit-Sharma 109*",a: "Virat-Kohli 93*"};
    }
        componentDidMount () {
            setTimeout (() => {
                this.setState ({
                    Data: "INDIA win the match",
                    a: "Virat-Kohli 102*",
                    b: "Rohit-Sharma 118*",
                });
            }, 15000);
        }
    render(){
        
        return (
            <>
                <h3>Hello {this.props.name}</h3>

                {/* <h3>*INDIA* : {this.state.Date.toLocaleTimeString()}</h3> */}
                <h3>*INDIA* : {this.state.Data}</h3>
                <h3>*INDIA* : {this.state.b}</h3>
                <h3>*INDIA* : {this.state.a}</h3>

                <div className="card flex flex-wrap justify-content-center gap-3">
                    <Button className="pi pi-amazon"/>
                    <Button className="pi pi-microsoft"/>
                    <Button className="pi pi-prime"/>
                </div>
                    
                
                {/* <p>Let's Learn about Class components</p> */}
            </>
        );
    };
}

export default Class