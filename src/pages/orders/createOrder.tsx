import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import DishInput from '@/components/DishInput/DishInput'
import ContainerOrderItem from '@/components/ContainerOrderItem/ContainerOrderItem'
import OrderItemTotal from '@/components/OrderItemTotal/OrderItemTotal'
function createOrder() {
  return (
    <div>
    <Navbar/>
    <BreadCrumb/>
    <DishInput/>
    <ContainerOrderItem/>
    <OrderItemTotal/>
    </div>

  )
}

export default createOrder  