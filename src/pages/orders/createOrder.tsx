import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import DishInput from '@/components/DishInput/DishInput'
import ContainerOrderItem from '@/components/ContainerOrderItem/ContainerOrderItem'

function createOrder() {
  return (
    <div>
    <Navbar/>
    <BreadCrumb/>
    <DishInput/>
    <ContainerOrderItem/>
    </div>

  )
}

export default createOrder  