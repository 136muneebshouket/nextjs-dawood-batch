"use client";
import React, { useState, useEffect, useContext } from "react";
import Context from "@/config/context";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const { message, setMessage } = useContext(Context);
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    setMessage({ loading: true });
    await axios
      .get(`/api/test_api`)
      .then((result) => {
        setMessage({ loading: false });
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        setMessage({ loading: false });
        console.log(err.response.data);
      });
  }

  async function del(id) {
    setMessage({ loading: true });
    await axios
      .delete(`/api/test_api`, { params: { del_id: id } })
      .then((result) => {
        setMessage({ loading: false });
        console.log(result.data.message);
        window.location.reload();
      })
      .catch((err) => {
        setMessage({ loading: false });
        console.log(err.response.data);
      });
  }

  return (
    <>
      <div className="cards">
        {data.map((obj, index) => {
          return (
            <>
              <div
                key={index}
                className="card"
                style={{
                  maxWidth: "300px",
                  margin: "10px",
                  padding: "10px",
                  background: "rgb(200,200,200)",
                }}
              >
                <h3>{obj.name}</h3>
                <p>{obj.email}</p>
                <p>{obj.age}</p>

                <div>
                  <button
                    onClick={() => {
                      del(obj._id);
                    }}
                  >
                    {" "}
                    <span style={{ color: "red" }}>&#9746;</span>{" "}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default page;
