/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function First() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
        setCount(count=>count+2)

    },2000)
  })


    return (


    <>
      
      <h1>I have rendered  {count} times !</h1>


    </>
    
  )
}

export default First


// without Dependancyies