import { useState } from 'react'
import './App.css'
import Ref from './compounts/Ref'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ref></Ref>
    </>
  )
}

export default App
