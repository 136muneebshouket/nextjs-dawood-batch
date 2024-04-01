'use client'
import React,{useContext} from 'react'
import Auth_links from './Auth_links'
import Link from 'next/link'
import Context from '@/config/context'



const Navbarr = () => {

  const { message, setMessage } = useContext(Context)

  // console.log(session)
  return (
    <nav>
     <ul>
      <li><Link href={'/'}>Home</Link></li>
     </ul>
     <Auth_links/>

    </nav>
  )
}

export default Navbarr