import Link from 'next/link'
import React, { ReactNode } from 'react'

type NavlinkProp = {
    to: string;
    children: ReactNode;
}


function Navlink({to, children}: NavlinkProp) {
  return (
    <li><Link href={to}>{children}</Link></li>
  )
}

export default Navlink