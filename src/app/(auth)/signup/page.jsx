"use client";
import React, { useState , useContext } from "react";
import axios from "axios";
import Context from "@/config/context";

const page = () => {

  const { message, setMessage } = useContext(Context)

  let obj = {
    username: "",
    email: "",
    password: "",
  };
  const [userdata, setUserdata] = useState(obj);
  const [show_pass, setShow_pass] = useState(false);

  async function Signup(e) {
    setMessage({loading:true})
    e.preventDefault();
    //  console.log(userdata)
    await axios
      .post("/api/auth/Signup", userdata)
      .then((result) => {
        setMessage({loading:false})
        setMessage({ success: true ,  msg:result.data.msg})
        setUserdata(obj)
        console.log(result.data);
      
      })
      .catch((err) => {
        setMessage({loading:false})
        setMessage({ success: false ,  msg:err.response.data.msg})
        console.log(err.response.data);
      });
  }

  return (
    <div>
      <h1>Sign up</h1>

      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input
            type="username"
            value={userdata.username}
            onChange={(e) => {
              setUserdata({ ...userdata, username: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            value={userdata.email}
            onChange={(e) => {
              setUserdata({ ...userdata, email: e.target.value.toLowerCase() });
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="">password</label>
          <input
            type={show_pass ? "text" : "password"}
            value={userdata.password}
            onChange={(e) => {
              setUserdata({ ...userdata, password: e.target.value });
            }}
            required
          />
          <i
            onClick={() => {
              setShow_pass(!show_pass);
            }}
            style={{ fontSize: "20px" }}
            className={show_pass ? "bx bx-hide" : `bx bx-show-alt`}
          ></i>
        </div>
        <br />

        <br />

        <button onClick={Signup}>Signup</button>
      </form>

      {/* <button onClick={()=>{}} > check popup</button> */}
    </div>
  );
};

export default page;
