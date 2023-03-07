
// useState: To manage states. Returns a stateful value and an updater function to update it.


import React, {useState} from "react";
import './App.css';

const App=()=>{
  const [counter,setCounter]=useState(0);
  const incrementhandle=()=> {
  setCounter((e)=>e+1)
  }
  const decrementhandle=()=>{
    setCounter((e)=>e-1)
  }
  return(
    <>
    <div>
      <h3>counter:{counter}</h3>
    </div>
    
      <button onClick={incrementhandle}>++</button>
      <button onClick={decrementhandle}>--</button>

    </>
  )
}

export default App;