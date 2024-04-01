"use client";
import axios from "axios";
import React, { useEffect, useState , useContext , memo } from "react";
// import Loader from "../Loder/Loader";
import Context from "@/config/context";

const Modal = ({ data, onclose , refresh }) => {
  const { message, setMessage } = useContext(Context)

  let intialobj = {
    name: "",
    email: "",
    age:''
  };

  const [formdata, setFormdata] = useState(intialobj);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormdata({ ...formdata, name: data?.name, email: data?.email ,  age: data?.age });
  }, []);

  async function update(e) {
    e.preventDefault();
    setMessage({loading:true})
    await axios.put('/api/test_api' , {formdata , id:data._id})
    .then((result) => {
        console.log(result.data)
        refresh();
        onclose();
        setMessage({loading:false})
    }).catch((err) => {
         console.log(err.response.data)
         setMessage({loading:false})
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
          <form onSubmit={update}>
            <div>
              <label htmlFor="">name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={(e) => {
                  setFormdata({ ...formdata, name: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="">email</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={(e) => {
                  setFormdata({ ...formdata, email: e.target.value });
                }}
              />
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>

      {loading ? <Loader /> : null}
    </>
  );
};

export default memo(Modal) ;
