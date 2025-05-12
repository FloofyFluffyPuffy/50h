import React from 'react'
const h = "hello John"
const p = new Date()
const Greeting = () => {
  return (
    <div>
        <h1>{h}</h1>
        <p>Date: {p.getDate()}</p>
    </div>
  )
}

export default Greeting