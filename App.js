import Child from "./components/Child";
import {useState} from "react"

const App=()=>{
    const [p,setp]=useState();
    const car='bmw'
    const fname=(t)=>{
setp(t)
    }
    return(
        <>
        <Child model={car} childo={fname} />
        child{p}
        </>
    )
}

export default App;