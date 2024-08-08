/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

function Third() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)
        },2000)
    },[])
  return (
    
    <>
    
     <h1>This is rendered {count} ++</h1>

  <h2>..............</h2>
    </>
  )
}

export default Third

// dependacy without pass a value