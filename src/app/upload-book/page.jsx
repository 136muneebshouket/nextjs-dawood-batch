"use client";

import Context from "@/config/context";
import Image from "next/image";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: sessionData } = useSession();
  const { message, setMessage } = useContext(Context);

let obj ={
    title: "",
    author: "",
    price: null,
    catogery: "",
    description: "",
  }

  const [bookinfo, setBookinfo] = useState(obj);
  const [img, setImg] = useState([]);
  function changehandler(e) {
    setBookinfo({ ...bookinfo, [e.target.name]: e.target.value });
  }
  console.log(img)

  async function imagehandler(e) {
    const files = e.target.files;
    // setMessage({ loading: true });
    // console.log(files)
    if (files.length > 5 || img.length >= 5) {
      setMessage({ loading: false });
      setMessage({ success: false, msg: "Maximum 5 images are allowed" });
      return;
    }
    try {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file.size > 4 * 1024 * 1024) {
        //   setMessage({
        //     success: false,
        //     msg: "Image size must be less than 4 MB",
        //   });
          continue;
        }
        // Read the selected image and convert it to a Data URL
        const reader = new FileReader();

        const promise = new Promise((resolve) => {
          reader.onload = (e) => {
            setImg((prevselectedimg) => [
              ...prevselectedimg,
              { url: e.target.result, file: file.name },
            ]);
            resolve();
          };
        });
        reader.readAsDataURL(file);
        promises.push(promise);
      }
      await Promise.all(promises);
    } catch (error) {
      console.error("Error reading images:", error);
    //   setMessage({ success: false, msg: "Error in uploading Images" });
    //   setMessage({ loading: false });
    } finally {
        
    }
    // setMessage({ loading: false });
  }

  // console.log(img)
  async function uploaddata(e) {
    e.preventDefault();
    setMessage({ loading: true });
    if (sessionData != null) {
      var userid = sessionData.user.id;
    }
    if (!userid) {
      setMessage({ success: false, msg: "please login" });
      return;
    }
    let obj = {
      bookinfo,
      img,
      userid,
    };
    await axios
      .post("/api/bookroutes/uploadroute", obj)
      .then((result) => {
        console.log(result);
        setMessage({ loading: false });
        setMessage({ success: true, msg: "Book saved successfully" });
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
        setMessage({
          success: err.response.data.success,
          msg: err.response.data.msg,
        });
      });
  }

  function del(index) {
    let images_for_delete = [...img];
    images_for_delete.splice(index, 1);
    setImg(images_for_delete);
  }
//   console.log(bookinfo)
  return (
    <>
      <div className="main-page-layout">
        <h1>Upload your Book</h1>
        <form onSubmit={uploaddata}>
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input type="text" onChange={changehandler} name="title" />
            <br />
            <label htmlFor="">Author Name</label>
            <br />
            <input type="text" onChange={changehandler} name="author" />
            <br />
            <label htmlFor="">Price(Rs)</label>
            <br />
            <input type="number" onChange={changehandler} name="price" />
            <br />
            <label htmlFor="">Description</label>
            <br />
            <input
              type="text-area"
              onChange={changehandler}
              name="description"
            />
            <br />
            <label htmlFor="">Select Catogery</label>
            <select onChange={changehandler} name="catogery" id="">
              <option value="">Select</option>
              <option value="Fiction">Fiction</option>
              <option value="Literature">Literature</option>
              <option value="Classics">Classics</option>
              <option value="Comics">Comics</option>
              <option value="Non Fiction">Non Fiction</option>
              <option value="Biographies">Biographies</option>
            </select>
            <label htmlFor="">Select Images</label>
            <input
              type="file"
              accept="image/*"
              onChange={imagehandler}
              multiple
            />
          </div>
          <button type="submit">Post</button>
        </form>
        <div className="image-main-show">
          {img?.map((v, index) => {
            // console.log(v)
            return (
              <>
                <div className="image-show-box">
                  <Image src={v.url} alt="Loading" width={150} height={100} />
                  <button className="image-del-btn" onClick={() => del(index)}>
                    delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
