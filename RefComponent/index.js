import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserefHook from './RefComponent/UseRef-hook/UserefHook';
import UserefHook2 from './RefComponent/UseRef-hook/UserefHook2';
import ClassUncontrolled from './RefComponent/ClassUncontrolled';
import CallbackRefCompo from './RefComponent/CallbackRefCompo';

import ClassRef from './RefComponent/ClassRef';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    

   {/* <ClassRef/> */}
    {/* <ClassUncontrolled/> */}
    {/* <CallbackRefCompo/> */}
    {/* <UserefHook/> */}
    <UserefHook2/>
    
  </React.StrictMode>
);


