import React,{ReactNode,useEffect,useState} from 'react'
import {Order} from '@/pages/orders'

type ListOrdersProps = {
    orders: Order[]
    Component: React.FC<Order>
}

function ListOrders({orders,Component}: ListOrdersProps) {
    const [displayedData, setDisplayedData] = useState<any[]>(orders)

    return (
        <div className='mt-5 flex flex-col space-y-4 pb-80 h-[80%] overflow-y-scroll'>
            {
                displayedData?.map((d, i)=>(
                    <Component {...d} key={i}/>
                ))
            }
        </div>
    )
}

export default ListOrders