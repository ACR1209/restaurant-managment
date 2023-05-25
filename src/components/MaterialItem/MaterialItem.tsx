import { Material } from '@/pages/materials'
import Link from 'next/link'
import React from 'react'
import {HiPencil, HiTrash} from 'react-icons/hi'

function MaterialItem({id, name, stock, unit, price_unit}: Material) {
  return (
    <div className='flex w-full justify-between bg-gray-normal p-5'>
      <div>
        <div className='flex items-end'>
          <h3 className='font-bold text-4xl mr-3'>{name}</h3>
          <h4 className='text-2xl'>x{stock} {unit}</h4>
        </div>
        <p className='text-lg'>
          P/U: ${price_unit} / {unit}
        </p>
      </div>
      <div className='flex items-center text-4xl'>
        <Link href={`/materials/edit/${id}`}><HiPencil className='text-blue-600 cursor-pointer hover:scale-105 transition-all'/></Link>
        <HiTrash className='text-red-normal cursor-pointer hover:scale-105 transition-all'/>
      </div>
    </div>
  )
}

export default MaterialItem