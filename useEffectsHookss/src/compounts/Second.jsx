/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Third() {
    const [count,setCount]=useState(0)
    const [name,setname]=useState("vaibhva")

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[count,name])
  return (
    
    <>
    
     <h1>This is rendered {count} ++</h1>

  <h2>..............</h2>
    </>
  )
}

export default Third

// dependacy  pass a value