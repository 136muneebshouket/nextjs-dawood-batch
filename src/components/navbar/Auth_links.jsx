import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Auth_links = () => {
  const { data: session, status } = useSession();
  // console.log(status)
  async function logout() {
    await signOut();
  }
  return (
    <>
      <ul>
        {status == 'unauthenticated' ? (
          <>
            <li>
              {" "}
              <Link href={"/signup"}>Signup</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href={"/api/auth/signin"}>Login</Link>{" "}
            </li>
          </>
        ) : (
          <>
            <li>
              {" "}
              <Link href={"#"} onClick={logout}>
                Logout
              </Link>{" "}
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Auth_links;
