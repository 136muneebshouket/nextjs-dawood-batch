import React from 'react'
import Auth_links from './Auth_links'
import Link from 'next/link'

const Navbarr = () => {
  return (
    <nav>
     <ul>
      <li><Link href={'/'}>Home</Link></li>
      <li> <Link href={'/about'}>About</Link>  </li>
      <li>  <Link href={'/useeffect'}>Use Effect</Link></li>
      <li>  <Link href={'/todo'}>Todos</Link></li>
     </ul>
     <Auth_links/>

    </nav>
  )
}

export default Navbarr