"use client";
import React, { useState } from "react";
import Context from "./context";
// import Response_modal from '@/othercomponents/Modal/Response_modal'
// import Modal_res from '@/othercomponents/Modal1/Modal_res'
import Full_Modal from "@/components/response_modal/Full_Modal";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }) => {
  const [message, setMessage] = useState(0);
  return (
    <>
      <Context.Provider value={{ message, setMessage }}>
        <SessionProvider>
          {children}
          {message ? (
            <Full_Modal
              res={message}
              onClose={() => {
                setMessage(0);
              }}
            />
          ) : null}
        </SessionProvider>
      </Context.Provider>
    </>
  );
};

export default Provider;
