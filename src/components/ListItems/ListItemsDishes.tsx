import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Dish } from '@/pages/dishes'

type ListProps<T> = {
    filterQuery: (query: string, data: T[]) => T[]
    data: T[]
    Component: React.FC<T>
}

function ListItems({Component, filterQuery, data}: ListProps<Dish>) {
  const [displayedData, setDisplayedData] = useState<any[]>(data)
  const [query, setQuery] = useState<string>("")

  function handleQuery(){
    if(query.trim().length === 0){
        setDisplayedData(data)
    }

    setDisplayedData(filterQuery(query, data))
  }
    
  useEffect(() => {
    handleQuery()
  }, [query])
  

  return (
    <div className="max-h-screen h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col p-5 w-full h-full">
        <div className="w-full">
          <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Buscar..."
            className="bg-gray-normal p-2 w-full"
          />
        </div>
        <div className="mt-5 flex flex-col space-y-4 pb-80 h-[80%] overflow-y-scroll ">
          {
              displayedData?.map((d, i)=>(
                <Component {...d} key={i}/>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default ListItems