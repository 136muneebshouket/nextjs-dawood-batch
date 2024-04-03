"use client";
import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "@/config/context";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Forgetpassword_modal = dynamic(() =>
  import("@/components/auth/Forgetpassword_modal")
);

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { message, setMessage } = useContext(Context);

  let obj = {
    email: "",
    password: "",
  };
  const [userdata, setUserdata] = useState(obj);
  const [show_pass, setShow_pass] = useState(false);
  const [show_f_modal, setShow_f_modal] = useState(false);

  async function Login(e) {
    // setMessage({loading:true})
    e.preventDefault();
    try {
      let loggedin = await signIn("credentials", {
        ...userdata,
        redirect: true,
      });
      console.log(loggedin);
    } catch (error) {
      setMessage({ success: false, msg: "Login failed" });
    }
    if (status == "authenticated") {
    }
    //  console.log(userdata)
  }

  return (
    <>
      <div>
        <h1>Sign up</h1>

        <form action="">
          <div>
            <label htmlFor="">email</label>
            <input
              type="text"
              value={userdata.email}
              onChange={(e) => {
                setUserdata({
                  ...userdata,
                  email: e.target.value.toLowerCase(),
                });
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

          <button onClick={Login}>Login</button>
        </form>

        <button
          onClick={() => {
            setShow_f_modal(true);
          }}
        >
          Forgetpassword
        </button>
        {/* <button onClick={()=>{}} > check popup</button> */}
      </div>

      {show_f_modal ? (
        <>
          <Forgetpassword_modal  onclose={()=>{setShow_f_modal(false)}}/>
        </>
      ) : null}
    </>
  );
};

export default page;
