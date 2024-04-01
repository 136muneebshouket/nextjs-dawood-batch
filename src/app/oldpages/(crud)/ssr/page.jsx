import React from "react";
import axios from "axios";

async function getdata() {
  let data = await axios
    .get(`${process.env.SITE_URL}/api/test_api`)
    .then((result) => {
    //   console.log(result.data);
      return result.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return data;
}
const page = async () => {
  const data = await getdata();
  return (
    <>
      <div className="cards">
        {data?.map((obj, index) => {
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
                {/* <p>{obj.email}</p>
                <p>{obj.age}</p> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default page;
