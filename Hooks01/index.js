import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassEffect from './Hooks02/ClassEffect';
import FunctionEffect from './Hooks02/FunctionEffect';
// import FunctionState from './Hooks01/FunctionState';
// import ClassState from './Hooks01/ClassState';
// import UswithArray from './Hooks01/UswithArray';
// import USestate01 from './Styling/Hooks01/USestate01';
// import UswithObject from './Styling/Hooks01/UswithObject';

// import Styling01 from './Styling/Styling01';
// import Styling02 from './Styling/Styling02';
// import FunctionEvent from './Event-handling/FunctionEvent';
// import ClassEvent from './Event-handling/ClassEvent';
// import BindingEvent from './Event-handling/BindingEvent';
// import reportWebVitals from './reportWebVitals';
// import Toggle from './Event-handling/Toggle';
// import List01 from './List-Rendering/List01';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FunctionEvent name= "India"/>
    <ClassEvent name= "India win the match class props"/> */}
    {/* <BindingEvent/> */}
    {/* <Toggle/> */}
    {/* <List01/> */}
    {/* <Styling01/> */}
    {/* <Styling02 check= {true}/> */}
    {/* <USestate01/> */}
    {/* <UswithObject/> */}

   {/* <UswithArray/> */}
  {/* <ClassState/> */}
  {/* <FunctionState/> */}

  <ClassEffect/>
  <FunctionEffect/>


  </React.StrictMode>
);


