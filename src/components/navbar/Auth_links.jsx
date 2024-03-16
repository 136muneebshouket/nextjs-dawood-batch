import React from 'react'
import Link from 'next/link'

const Auth_links = () => {
  return (
    <>
      <ul>
        <li> <Link href={'/signup'}>Signup</Link>  </li>
        <li> <Link href={'/login'}>Login</Link> </li>
      </ul>
    </>

  )
}

export default Auth_links