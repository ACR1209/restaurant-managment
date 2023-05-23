import React from 'react'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Navbar from '@/components/Navbar/Navbar';
import { Material } from '../materials';
import { GetServerSideProps } from 'next';
import MaterialItem from '@/components/MaterialItem/MaterialItem';
import ListOrders from '@/components/ListOrders/ListOrders';
import OrderItem from '@/components/OrderItem/OrderItem';

export type Order = {
  materials: Material[]
  name: string
  quantity: number
  unit: string
  //PVP/U
  pricePvp: number
  //Cost/U
  pricePp: number
  date: string
  total: number
}

type OrderProps = {
  orders: Order[]
  error?: string
}

function Orders({orders, error}: OrderProps) {
  return (
     <>
     <Navbar></Navbar>
     <BreadCrumb></BreadCrumb>
     <ListOrders orders={orders} Component={OrderItem}></ListOrders
     
     >
     </> 
     
  )
}
export default Orders;

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  let orders: Order[] = [];
  let error: string = "";
  let materials: Material[] = [];
  materials = [
    {
      id: "andrezorra",
      name: "Papa",
      stock: 10,
      unit: "Kg",
      price_unit: 10
    },
    {
      id: "queso",
      name: "Queso",
      stock: 10,
      unit: "Kg",
      price_unit: 6
    }
  ];
  orders = [
    {
      materials: materials,
      name: "Arepas",
      quantity: 10,
      unit: "Unidades",
      pricePvp: 100,
      pricePp: 50,
      date: "2021-10-10",
      total: 1000
    },
    {
      materials: materials,
      name: "Arepas",
      quantity: 10,
      unit: "Unidades",
      pricePvp: 100,
      pricePp: 50,
      date: "2021-10-10",
      total: 1000
    },    {
      materials: materials,
      name: "Arepas",
      quantity: 10,
      unit: "Unidades",
      pricePvp: 100,
      pricePp: 50,
      date: "2021-10-10",
      total: 1000
    },
  ];

  return {
    props: {
      orders,
      error,
    },
  };
}
