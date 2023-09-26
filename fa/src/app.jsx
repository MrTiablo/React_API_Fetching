
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [post,setPost]=useState([])

 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(post => setPost(post.splice(0,10)))
 },[])
  
  return (
    <>
      <div>
       {
        post.map((pos)=>{
          return  <h1 key={pos.id}>{pos.title}</h1>

         
        })
       }
      </div>  
    </>
  )
}
export default App
