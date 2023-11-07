import React, { useState } from 'react'

const Counter = () => {

  const [numberCounter, setNumberCounter] = useState(0)
  return (
    <>
    {numberCounter}
    <button onClick={()=>{setNumberCounter(numberCounter+1)}}>+</button>
    <button onClick={()=>{setNumberCounter(numberCounter-1)}}>-</button>
    </>
  )
}

export default Counter