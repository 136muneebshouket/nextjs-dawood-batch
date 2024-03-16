'use client'
import React, { useEffect, useState } from 'react'

const page = () => {


    let todos = JSON.parse(localStorage.getItem('todo'))


    const [user_input, setUser_input] = useState('')
    const [arr, setArr] = useState(todos ? todos : [])
    const [edit_flag, setEdit_flag] = useState(false)
    const [edit_index, setEdit_index] = useState()


    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(arr))
    }, [arr])

    //    useEffect(()=>{
    //     localStorage.setItem('todo' , JSON.stringify(arr))
    //    },[])




    function add(e) {
        e.preventDefault();
        if (user_input == '') {
            alert('please add some value')
            return
        }
        if (arr.includes(user_input)) {
            alert('value already exist')
            return
        }
        setArr([...arr, user_input])
        setUser_input("")
    }
    function del(index) {
        let newarr = arr.filter((v, i) => i !== index)
        setArr(newarr)
    }
    function update(index) {
        setUser_input(arr[index])
        setEdit_flag(true)
        setEdit_index(index)
    }
    function edit(e) {
        e.preventDefault();
        let newarr = arr.toSpliced(edit_index, 1, user_input)
        setArr(newarr)
        setUser_input("")
        setEdit_flag(false)
    }





    return (
        <>
            <form >
                <div>
                    <input value={user_input} type="text" onChange={(e) => { setUser_input(e.target.value) }} />
                    {edit_flag ?
                        <button onClick={edit} type='submit'>EDIT</button>
                        :
                        <button onClick={add} type='submit'>Submit</button>
                    }

                </div>
            </form>

            <ul>
                {arr.map((v, index) => {
                    return (<>
                        <li>{v} <button onClick={() => { del(index) }}>del</button> <button onClick={() => { update(index) }}>update</button></li>
                    </>)
                })}
            </ul>


        </>
    )
}

export default page