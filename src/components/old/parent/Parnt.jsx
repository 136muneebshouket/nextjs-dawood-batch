'use client'
import React, { useState, useCallback, useMemo } from 'react'
import Child from './Child'

const Parnt = () => {

  const [state, setState] = useState('')
  const [num, setNum] = useState(0)



  const datafromchild = useCallback((param) => {
    console.log(param);
  }, []);
  
   useCallback(()=>{
     console.log('render');
   },[num])
  

  return (
    <>
      <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
        <h1>PARENT</h1>
        <button onClick={() => { setState('davood') }}>Click me!</button>
        <button onClick={() => { setNum(num + 1) }}>increment!</button>
        {num}

        <Child state={state} setState={setState}
          datafromchild={datafromchild}
        />

      </div>

    </>
  )
}

export default Parnt