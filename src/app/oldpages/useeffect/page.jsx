'use client'
import React, { useState, useEffect } from 'react'

const page = () => {

  const [input, setInput] = useState(0)




  useEffect(() => {
    setTimeout(() => {
      setInput(input + 1)
    }, 2000)
  }, [])

  useEffect(() => {
    console.log('state change');
  }, [input])


  return (<>
    <div>UseEffect page</div>
    <h1>{input}</h1>
    {/* <button onClick={()=>{setInput('hello world')}}>Click me!</button> */}

  </>

  )
}

export default page