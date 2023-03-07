
// useMemo: It returns a memoized value that helps in performance optimizations.

import { useState, useMemo} from "react";
import './App.css';

const App=()=>{
  const[counter, setCounter]=useState(0);
  const[todos,setTodos]=useState([]);
  const IncrementHandle=()=>{
    setCounter((e)=>e+1);
  };
  const addTodo=()=>{
    setTodos((e)=>[...e,"todo task"]);
  };
  const expensiveCalc=(counter)=>{
    console.log("expensive function triggered");
    for(let i=0;i<10000;i++){
      counter+=1;
    }
    return counter;
  }
  const calcvalue=useMemo(()=>expensiveCalc(counter),[counter]);
  return(
    <>
    <h1>Use Memo</h1>
    <div>
      <h3>Counter:{counter}</h3>
      <button onClick={IncrementHandle}>++</button>
    </div>
    <div>
      <h3>TO DO CheckList</h3>
      {todos.map((todo,i)=>{
        return <li key={i}>{todo}</li>;
      })}
      <button onClick={addTodo}>Add todo</button>
    </div>
    <div>{calcvalue}</div>
    </>
  );
};

export default App;
