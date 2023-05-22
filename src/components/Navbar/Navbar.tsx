import React from 'react'
import Navlink from './Navlink'

function Navbar() {
  return (
    <nav className='w-full h-24 flex justify-end p-5 bg-gray-normal items-center font-bold'>
        <ul className='flex space-x-10'>
            <Navlink to='/'>Inicio</Navlink>
            <Navlink to='/materials'>Materia prima</Navlink>
            <Navlink to='/dishes'>Platos</Navlink>
            <Navlink to='/orders'>Orden de compra</Navlink>
        </ul>
    </nav>
  )
}

export default Navbar