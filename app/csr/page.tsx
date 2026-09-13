'use client'
import {useState} from "react";
export default function counter(){
  const [state, setState]= useState(0);
  return(
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={()=>{setState(state+1)}}>Increase</button>
    </div>
  )
}