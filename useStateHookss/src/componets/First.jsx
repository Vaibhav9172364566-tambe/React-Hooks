/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function First() {
  const [color, setColor] = useState('Red');

  const changeColor = () => {
    setColor('Blue');
  };

  return (
    <>
      <h1>My name is Vaibhav {color}</h1>
      <button onClick={changeColor}>Change</button>
    </>
  );
}

export default First;
