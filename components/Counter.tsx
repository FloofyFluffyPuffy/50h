import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const Increase = () => {
        setCounter(counter + 1)
    }
  return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={Increase}>INCREMENT</button>
    </div>
  )
}
export default Counter