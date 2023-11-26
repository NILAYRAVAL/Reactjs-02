import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import MainContext from './Hooks03/MainContext';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   

    <MainContext/>

    
  </React.StrictMode>
);


