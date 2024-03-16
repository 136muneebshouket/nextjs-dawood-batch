'use client'
import React , {memo} from 'react'


const Child = ({state , setState , datafromchild}) => {
    // console.log(props);
    // console.log('child render');
    return (
        <>
            <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
                <h1>Child</h1>
                {state}

                {/* <button onClick={()=>{setState('shanoor')}}>click</button> */}

                <button onClick={ ()=>{ datafromchild('value from child')}}>call func</button>
             
            </div>
        </>

    )
}

export default memo(Child)