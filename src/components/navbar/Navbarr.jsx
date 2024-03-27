'use client'
import React,{useContext} from 'react'
import Auth_links from './Auth_links'
import Link from 'next/link'
import Context from '@/config/context'

const Navbarr = () => {

  const { message, setMessage } = useContext(Context)

  // console.log(message)
  return (
    <nav>
     <ul>
      <li><Link href={'/'}>Home</Link></li>
      {/* <li><Link href={'/test-api'}>API</Link></li> */}
      {/* <li><Link href={'/backend'}>backend</Link></li> */}
      <li><Link href={'/form'}>ADD user</Link></li>

      {/* <li> <Link href={'/about'}>About</Link>  </li> */}
      {/* <li>  <Link href={'/useeffect'}>Use Effect</Link></li> */}
      {/* <li>  <Link href={'/todo'}>Todos</Link></li> */}
     </ul>
     <Auth_links/>

    </nav>
  )
}

export default Navbarr