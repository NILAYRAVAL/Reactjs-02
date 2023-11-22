import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FunctionEvent from './Event-handling/FunctionEvent';
// import ClassEvent from './Event-handling/ClassEvent';
import BindingEvent from './Event-handling/BindingEvent';
import reportWebVitals from './reportWebVitals';
import Binding02 from './Componets/Binding02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FunctionEvent name= "India"/>
    <ClassEvent name= "India win the match class props"/> */}
    {/* <BindingEvent/> */}
    <Binding02/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
