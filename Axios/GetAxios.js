import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function GetAxios() {

    const [first, setfirst] = useState([]);

    useEffect(() => {

     Axios.get(baseURL)
     .then ((response) => {
     setfirst(response.data);

    })
    .catch((error) => {
      console.log(error);
    })
    },[]);
  return (
    <>
    {
        first.map((item) => {
        const {id, title, body} = item;
            return (
                <div className='data' key={id}>
                <h1>{id}</h1>
                <h2>{title.slice(0,10)}</h2>
                <h3>{body.slice(0,50).toUpperCase()}</h3>
              </div>
            )
        })
    }
    <h1>Hello</h1>
  <h1>{first.id}</h1> 
  <h2>{first.title}</h2> 
  <h3>{first.body}</h3> 
   </>
  )
}

export default GetAxios