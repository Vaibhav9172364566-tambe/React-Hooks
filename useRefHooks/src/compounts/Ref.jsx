import React, { useRef } from 'react'

function Ref() {

    const point=useRef(null)
    const onClickHandler =()=>{
        point.current.value="Vaibhav"
        point.current.focus()

    }

  return (
    <>

    <div>

        <button onClick={onClickHandler}>Action</button>
        <br></br>
    </div>

   <label>,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</label><br></br>

   <textarea ref={point}></textarea>
    </>
  )
}

export default Ref