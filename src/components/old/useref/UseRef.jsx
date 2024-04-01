'use client'
import React, { useRef } from 'react'

const UseRef = () => {

    const ref = useRef(null)

    function changeref() {
        ref.current.style.background = 'lightblue'
    }


    return (<>
        <div ref={ref} style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
            <h1>Use ref</h1>

            <button onClick={changeref}>click</button>
        </div>

    </>

    )
}

export default UseRef