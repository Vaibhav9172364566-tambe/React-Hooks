import React, { useMemo, useState } from 'react'

function First() {

    const [number,setNumber]=useState(0)
    const [counter,SetCounter]=useState(0)

    function cube(num){
        console.log("Calculation done");
        return Math.pow(num,3)
        
    }

    const result=useMemo(()=>cube(number),[number])
  return (
<>
    <input type='number' value={number} onChange={(e)=>{setNumber(e.target.value)}}></input>
    <h2>cube of the {result}</h2>

    <button onClick={()=>{SetCounter(counter+1)}}>Counter + 1</button>
    <h1>Counter :{counter}</h1>
    </>
  )
}

export default First