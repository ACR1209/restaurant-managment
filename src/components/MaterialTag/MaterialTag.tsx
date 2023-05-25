import React from 'react'

function MaterialTag({amount, material, removeMaterial}: {material: {id: string; name: string[], unit: string}, amount: number, removeMaterial: (id: string)=>void}) {
    return (
        <div className='w-1/3 flex bg-gray-normal mb-2 p-1 justify-center items-center'>

        <div className='w-full  group relative  flex justify-center items-center'>
            <div className='truncate'>{amount}{material?.unit} {material?.name}</div>
            {
             `${amount}${material?.unit} ${material?.name}`.length > 25 ? 
            <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{amount}{material?.unit} {material?.name}</span>
                : ""
        }
        </div>
        <div className='p-1 hover:font-bold cursor-pointer' onClick={()=>removeMaterial(material?.id)}>X</div>
        </div>

  )
}

export default MaterialTag