import { GetServerSideProps } from 'next';
import React from 'react'
import { Dish } from '..';
import CreateItems from '@/components/EditItems/EditItemDish';
import { validateDish } from '../create';
import { Material } from '@/pages/materials';
import DishesForm from '@/components/DishesForm/DishesFormEdit';
import Navbar from '@/components/Navbar/Navbar';

type EditDishProps = {
    dish: Dish | undefined
    materials: Material[]
    error: string;
}

function EditDish({dish, materials, error}: EditDishProps) {
  return (
    <div className='min-h-screen max-h-screen overflow-hidden'>
      <Navbar/>
        <CreateItems Form={DishesForm} checkValidity={validateDish} data={dish} title='Editar plato' endpoint={`/test/edit/${dish?.id}`} error='' img={{src: "/pizza.jpg", alt: "Pizza"}} materials={materials} key="aeaearte"/>
    </div>
  )
}

export default EditDish

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let dish: Dish | undefined;
    let error: string = "";
    const { id } = ctx.query;
  
    /*
      await axios
        .get(`${process.env.BACKEND}/dish/{id}`)
        .then((res) => {
          dish = res.data;
        })
        .catch((err) => {
          error = err;
        });
        */
    let dishes: Dish[] = [
        {
          id: "1",
          name: "Pizza",
          pvp: 10.99,
          cost: 8.9,
          materials: [
            {
              amount: 300,
              material: { id: "1", name: "Tomate", unit: "GR" },
            },
          ],
        },
      ];
  
    dish = dishes.filter((m) => m.id === id)
      ? dishes.filter((m) => m.id === id)[0]
      : undefined;


      let materials: Material[] = [];
      /*
      await axios
        .get(`${process.env.BACKEND}/materials`)
        .then((res) => {
          materials = res.data;
        })
        .catch((err) => {
          error = err;
        });
        */
      materials = [
        { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
        { id: "2", name: "Papa", price_unit: 0.6, unit: "GR", stock: 1000 },
      ];

    return {
      props: {
        dish,
        materials,
        error
      },
    };
  };
  