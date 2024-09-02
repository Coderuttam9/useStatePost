import React, { useState } from 'react'

const Counter = () => {

  const [ count, setCounter]= useState(10)

  const handleIncrement=()=>{
    setCounter(( prevState)=>{
      return prevState + 1
    })
    
  }
  const handleDescrement=()=>{
    setCounter(( prevState)=>{
      return prevState - 1
    })
    
  }

  return (
    <div>
    <h2> {count}</h2>
    <hr/>
    <button onClick={handleIncrement}> increment</button>
    <button onClick={handleDescrement}> decremnet</button>
    <button > reset</button>
    <button>set</button>
    </div>
  )
}

export default Counter