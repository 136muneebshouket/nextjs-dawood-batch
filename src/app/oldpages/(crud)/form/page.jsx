"use client";
import React, { useState , useContext} from "react";
import axios from "axios";
import Context from "@/config/context";


const page = () => {
    const { message, setMessage } = useContext(Context)

  let initialobj = {
    name: "",
    email: "",
    age: "",
  };

  const [data, setData] = useState(initialobj);


 async function adddata(e) {
    e.preventDefault();
    // console.log(data)
     setMessage({loading:true})

    await axios.post(`/api/test_api` , data)
    .then((result) => {
        setMessage({loading:false})
        setData(initialobj)
        console.log(result.data)
    }).catch((err) => {
        setMessage({loading:false})
        console.log(err.response)
    });
    
  }

  return (
    <>
      <div>
        <form onSubmit={adddata}>
          <div>
            <label htmlFor="">name</label>
            <input type="text" name="name" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}} id="" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="email" name="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} id="" />
          </div>
          <div>
            <label htmlFor="">age</label>
            <input type="number" name="age" value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}} id="" />
          </div>
          {/* <div>
            <label htmlFor="">gender</label>
            <select name="gender" onChange={(e)=>{setData({...data,gender:e.target.value})}} id="">
              <option value="">select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div> */}
          {/* <div>
            <label htmlFor="">gender</label>
            <br />
             <input type="radio" onChange={(e)=>{setData({...data,gender:e.target.value})}}  name="g" value={'male'} /> <span>male</span>
             <br />
             <input type="radio" onChange={(e)=>{setData({...data,gender:e.target.value})}} name="g" value={'female'} /> <span>female</span>
          </div> */}

          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
