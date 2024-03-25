'use client'
import axios from 'axios'
import React from 'react'

const page = () => {

async function testapi() {
    // await axios.get('http://localhost:8000/getdata?name=test&rollno=200')
    // .then((result) => {
    //     console.log(result.data)
    // }).catch((err) => {
    //     console.log(err)
    // });

    // await axios.post('http://localhost:8000/postdata' , {name:'muneeb',rollno:2000})
    // .then((result) => {
    //     console.log(result.data)
    // }).catch((err) => {
    //     console.log(err)
    // });


    // for next.js backend


    // await axios.get('/api/test_api?name=nextjs&page=1')
    // .then((result) => {
    //     console.log(result.data)
    // }).catch((err) => {
    //     console.log(err)
    // });

    await axios.post('/api/test_api' , {name:'next',rollno:200})
    .then((result) => {
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });



}

  return (
   <>
   
   
   <button onClick={testapi}>Click me</button>
   </>
  )
}

export default page
