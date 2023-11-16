import React, { useState } from 'react'
import Axios from 'axios'

function PostAxios() {
    const [my_title, settitle] = useState('')
    const [my_body, setbody] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title : my_title,
            body : my_body
        })
        .then((response)=>{
           console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
        //  201 in clg == success status
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Enter The title:</label>
            <input type='text' name='title' value={my_title} onChange={(e)=> settitle(e.target.value)}/>
            <br/><br/>

            <label>Enter The Body:</label>
            <input type='text' name='Body'value={my_body} onChange={(e)=> setbody(e.target.value)}/>
            <br/><br/>

            <input type='submit' value='post'/>
        </form>
    </>
  )
}

export default PostAxios