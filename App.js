import './App.css';
import React from "react";
import Page1 from './components/Page1';
import { useState, createContext } from 'react';
export const Con = createContext();
const App = () => {
  const [name,setname] = useState("hello umang")
  return (
    <>
      <div>
        <Con.Provider value={name}>
          <Page1 />
          </Con.Provider>
      </div>
    </>
  )
}

export default App;
