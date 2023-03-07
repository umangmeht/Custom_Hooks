import  axios from "axios"
import {useEffect, useState}  from "react";
import './App.css';

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setData(res.data));
  },[]);
  return (
    <>
    <h1>axios</h1>
    {data.map((post)=>{
      const{id,title,body}=post;
      return<div className="card" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>

      </div>
    })}
    </>
  )
}

export default App;
