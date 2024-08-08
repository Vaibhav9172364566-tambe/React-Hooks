/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function Second() {
    // const [brand,setBrand]=useState('oddi')
    // const [model,setModel]=useState('roma')
    // const [year,setyear]=useState('2024')
    //  const [color,setColor]=useState('red')

    const [car,SetCar]=useState({
        brand:'Tata',
        model:"punch",
        year:"2024",
        color:"red"

    })
    const changeColor=()=>{
        SetCar((prev)=>{
            return{...prev,color:"blue"}

        })
    }
  return (
    
    <>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeColor}>Blue</button>

    </>
  )
}

export default Second