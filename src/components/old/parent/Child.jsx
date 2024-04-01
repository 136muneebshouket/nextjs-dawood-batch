'use client'
import React , {memo , useContext} from 'react'
import Context from '@/config/context'


const Child = ({state , setState , datafromchild}) => {

       const { message, setMessage } = useContext(Context)


       function changecontext() {
        setMessage(message + 1)
       }

    // console.log(props);
    // console.log('child render');
    return (
        <>
            <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
                <h1>Child</h1>
                {state}

                {/* <button onClick={()=>{setState('shanoor')}}>click</button> */}

                <button onClick={ ()=>{ datafromchild('value from child')}}>call func</button>
                <button onClick={changecontext}>change context</button>
             
            </div>
        </>

    )
}

export default memo(Child)