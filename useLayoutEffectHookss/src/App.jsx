import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

useEffect(()=>{
  console.log("This is useEffects hooks");
  
},[])

useLayoutEffect(()=>{
  console.log("This is useLayoutEffectt hooks");

  
},[])
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
