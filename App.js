
// useRef: It returns a ref object with a.current property.
// The ref object is mutable.
// It is mainly used to access a child component imperatively.

  import { useRef } from "react";
import './App.css';

const App = () => {
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return (
    <>
      <h3>Uncontrolled Components</h3>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
