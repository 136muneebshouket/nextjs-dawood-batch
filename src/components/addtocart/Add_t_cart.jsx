"use client";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Context from "@/config/context";

const Add_t_cart = ({ bookid }) => {
  const { message, setMessage } = useContext(Context);
  const [exist, setExist] = useState(false);

  async function checkincarts(){
    try {
        let carts = await JSON.parse(localStorage.getItem("bookcarts"));
        if (!carts) {
          return;
        }
        if (carts.includes(bookid)) {
          setExist(true);
        }else{
          setExist(false);
        }
      } catch (error) {
        console.log("not any carts");
      }
  }

  useEffect(()=>{
    checkincarts()
  },[])

  async function addtocart() {
    if (!bookid) {
      setMessage({ success: false, msg: "Something went wrong" });
      return;
    }
    try {
      let carts = await JSON.parse(localStorage.getItem("bookcarts"));
      if (!carts) {
        localStorage.setItem("bookcarts", JSON.stringify([]));
        let newcart = await JSON.parse(localStorage.getItem("bookcarts"));
        newcart.push(bookid);
        localStorage.setItem("bookcarts", JSON.stringify(newcart));
        checkincarts()
        setMessage({ success: true, msg: "added to cart" });
      }
      if (carts) {
        if (carts.includes(bookid)) {
          let filter_carts = carts.filter((v) => {
            return v !== bookid;
          });
          localStorage.setItem("bookcarts", JSON.stringify(filter_carts));
          setMessage({ success: true, msg: "removed from carts" });
          checkincarts()
          return;
        } else {
          carts.push(bookid);
          localStorage.setItem("bookcarts", JSON.stringify(carts));
          checkincarts()
          setMessage({ success: true, msg: "added to cart" });
        }
      }
    } catch (error) {
      console.log(error);
    }

    //  alert(`${bookid} added to cart`)
  }

  return (
    <>
      <div class="flex -mx-2 mb-4">
        <div class="w-1/2 px-2">
          <button
            onClick={addtocart}
            class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
          >
             {exist ? 'already added':'Add to Cart'} 
          </button>
        </div>
        <div class="w-1/2 px-2">
          <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
            Add to Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default Add_t_cart;
