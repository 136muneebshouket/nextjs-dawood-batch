"use client";
import React, { useState, useRef } from "react";
import Loader from "./Loader";
import OutsideClickHandler from "react-outside-click-handler";

const Full_Modal = ({ res  , onClose}) => {
  // console.log(res)

  let modalref = useRef(null);
  return (
    <>
      {res?.loading ? <Loader /> : null}

      {res.msg ? (
        <>
          <div className="loder response_modal">
            <span style={res.success ? { border:'1px solid green' , color:'green' }:{border:'1px solid red' , color:'red'}} ref={modalref}>{res.msg}</span>
          </div>
        </>
      ) : null}

      <OutsideClickHandler
        onOutsideClick={(event) => {
          if (!(modalref.current.contains(event.target))) {
            onClose();
          }
        }}
      ></OutsideClickHandler>
    </>
  );
};

export default Full_Modal;
