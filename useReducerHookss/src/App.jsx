/* eslint-disable no-undef */
import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const initialState={count:0}

  //reducer function
  const reducer=(state,action)=>{
     switch(action.type){
      case 'increse ':{
        return{count: state.count+1}

      }
      case 'decrese':{
        return{count: state.count-1}

      }
      case 'input':{
        return{count: action.payload}

      }
      default :{
        return state
      }


     }
     
  }

  //
  const[state,dispatch]=useReducer(reducer,initialState)



  return (
    <>
<h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:increse})}>Increse</button>
      <button onClick={()=>dispatch({type:decrese})}>Decrese</button><br></br>
      <input 
      value={state.count}
      onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})} type='number'></input>
      
    </>
  )
}

export default App
