import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var fun=new Set();

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState(0)

  const increment=useCallback(()=>{
    setCount(count+1)

  },[count +1])

  const decrement=useCallback(()=>{
    setCount(count-1)
  },count[-1])

  const incrementnumber=useCallback(()=>{
    setNumber(number+1)
  },[number])

  fun.add(increment)
  fun.add(decrement)
  fun.add(incrementnumber)

  return (
    <>
    <h4>React example for callback</h4>
    <p>Count :{count}</p>
    <p>Function count: {fun.size}</p>
    <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={incrementnumber}>Number  Incrre</button>

    </>
  )
}

export default App
