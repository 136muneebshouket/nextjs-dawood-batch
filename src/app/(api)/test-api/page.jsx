"use client";

import React, { useState , useEffect , useMemo} from "react";
import axios from "axios";
import Image from "next/image";


const page = () => {
  const [products, setProducts] = useState([]);
  const [searchval, setSearchval] = useState('');

  useEffect(()=>{
    getapi()
  },[])

  async function getapi() {
    await axios
      .get(`https://fakestoreapi.com/products?limit=10`)
      .then((result) => {
        // console.log(result.data)
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


//   useMemo(()=>{
//     // console.log(searchval)
//     if(searchval != ''){
//     let filterddata =  products.filter((p,i)=>{
//         if(p.title.toLowerCase().includes(searchval.toLowerCase())){
//             return p
//         }
//       })
//       console.log(filterddata)
//     }

//   },[searchval])


  return (
    <>
      <div>
        <div>
            <input type="text" onChange={(e)=>{setSearchval(e.target.value)}} />
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((v, index) => {
           if(v.title.toLowerCase().includes(searchval.toLowerCase()) || (!searchval)){
                return (
                    <>
                      <div className="w-1/5 border border-slate-400 m-1 p-1">
                        <img
                          src={v.image}
                          width={100}
                          height={100}
                          className="w-full h-auto"
                        />
                        <h1 className="m-2 font-bold">{v.title}</h1>
                      </div>
                    </>
                  );
            }
           
          })}
        </div>
      </div>
    </>
  );
};

export default page;
