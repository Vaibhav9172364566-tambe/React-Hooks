import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './compounts/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <First></First>
       
    </>
  )
}

export default App
