// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';

// const Jsompost01 = () => {
//     const [title,settitle]=useState("")
//     const [body,setbody]=useState("")
//     const [id,setid]=useState(1)
//     const [posts, setPosts] = useState([]);
    

//     const handle=(e)=>{

//         e.preventDefault()
    
//         const User={
//             id:id,
//             title:title,
//             body:body
//         }
//         axios.post("http://localhost:3001/post",User)
//             .then(response=>{
//                 settitle("")
//                 setbody("")
//                 setid(id+1)
//                 console.log(response.data)
//             })
//     }
//   return (
//     <div>
//     <form onSubmit={handle}>
//         <input type="text" value={title} onChange={post=>settitle(post.target.value)}/>
//         <input type="text" onChange={post=>setbody(post.target.value)}/>
//         <button type='submit'>Click</button>
//     </form>
//       <h2>Posts Table</h2>
//       <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {post.map((post) => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Jsompost01





























import React, { useState} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';


const Jsompost01 = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [id,setid]=useState(3)
  
  const [posts, setPosts] = useState([]); 

  
 
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://dummy-2a323-default-rtdb.firebaseio.com/post.json");
        const fetchedPosts = res.data ? Object.values(res.data) : [];
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



  const handle = (e) => {
    e.preventDefault();

    const newPost = {
      id:id,
      title: title,
      body: body,
    };

    axios.post("https://dummy-2a323-default-rtdb.firebaseio.com/post.json", newPost)
      .then(response => {
        settitle("");
        setbody("");
        setid(id+1)
        fetchPosts()
        console.log(response.data);
      })
  };

  return (
    <div>
      <form onSubmit={handle} border='4' align='center' style={{height:"100px",marginTop:40}}>
        <input
          type="text"
          value={title}
          onChange={e => settitle(e.target.value)}
          placeholder="Title"
          style={{padding:"2%"}}
        />
        <input
          type="text"
          value={body}
          onChange={e => setbody(e.target.value)}
          placeholder="Body"
          style={{padding:"2%"}}
        />
        <Button type="submit" style={{padding:"2%",backgroundColor:"lightblue"}}>Submit</Button>
        <Button onClick={fetchPosts} style={{padding:"2%",backgroundColor:"lightblue"}}>Show</Button>
        
      </form>

      
      <h2>Posts Table</h2>
      <table border="4" cellPadding="10" align='center' style={{ borderCollapse: 'collapse', width: '60%',textAlign:"center"}}>
        <thead style={{backgroundColor:"gray"}} >
          <tr>
            <th>Sl.No</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post,index) => (
            <tr key={post.id}>
              <td>{index+1}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Jsompost01;
