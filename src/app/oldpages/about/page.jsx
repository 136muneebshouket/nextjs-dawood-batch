'use client'
import React, { useState } from 'react'

const page = () => {

  const [number, setNumber] = useState(0)
  const [arr, setArr] = useState([])

 
  function addrr() {
   setNumber(number + 1) 
   setArr([...arr , number])
  } 
  // name()
  console.log(arr);

  return (
    <>
      <div>ABOUT PAGE</div>

      <h1>{number}</h1>

      <button onClick={() => { setNumber(number + 1) }}>Click me!</button>
      {/* <button onClick={name}>Click me!</button> */}
      <br />
      <button onClick={addrr}>Add Array!</button>

      <ul>
        {arr.map((v, index) => {
          return (<>
            <li>todo{v}</li>
          </>)
        })}
      </ul>

    </>

  )
}

export default page