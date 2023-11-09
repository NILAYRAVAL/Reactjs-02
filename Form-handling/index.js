import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ClassMultipleInput from './Form-handling/ClassMultipleInput';

import FunctionForm from './Form-handling/FunctionForm';

import ClassForm from './Form-handling/ClassForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
 
  <ClassForm/> 
  <FunctionForm/>
  <ClassMultipleInput/>
 
  </React.StrictMode>
);


