import Link from 'next/link'
import React, { ReactNode } from 'react'

type NavlinkProp = {
    to: string;
    children: ReactNode;
}


function Navlink({to, children}: NavlinkProp) {
  return (
    <li className='hover:scale-105 transition-all'><Link href={to}>{children}</Link></li>
  )
}

export default Navlink