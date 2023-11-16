import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import GetAxios from './Axios/GetAxios';
import PostAxios from './Axios/PostAxios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    

    <GetAxios/>
    <PostAxios/>

  </React.StrictMode>
);


