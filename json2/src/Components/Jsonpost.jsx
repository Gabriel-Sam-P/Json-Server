import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Jsonpost = () => {
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const [id,setid]=useState(3)

    const handle=(e)=>{

        e.preventDefault()
    
        const User={
            id:id,
            title:title,
            body:body
        }
        axios.post("http://localhost:3001/post",User)
            .then(response=>{
                settitle("")
                setbody("")
                setid(id+1)
                console.log(response.data)
            })
    }
  return (
    <form onSubmit={handle}>
        <input type="text" value={title} onChange={data=>settitle(data.target.value)}/>
        <input type="text" value={body} onChange={data=>setbody(data.target.value)}/>
        <button type='submit'>Click</button>
    </form>
  )
}

export default Jsonpost;

