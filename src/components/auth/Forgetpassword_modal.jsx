"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Forgetpassword_modal = ({onclose}) => {
 
  const router = useRouter();
    const[email,setEmail] =useState('')
    // console.log(router.pathname)

    async function forgetpassword(e) {
        e.preventDefault();

        await axios.post(`/api/auth/forget_pass` , {email})
        .then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err.response.data)
        });
    }

  return (
    <>
      <div className="main_div">
        <div className="form">
          <div className="close_btn">
            {" "}
            <button onClick={onclose}>close</button>
          </div>
          <form onSubmit={forgetpassword}>
           
            <div>
              <label htmlFor="">email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value );
                }}
                placeholder="type valid email"
              />
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword_modal;
