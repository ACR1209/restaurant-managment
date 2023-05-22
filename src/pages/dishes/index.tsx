import React from "react";
import { Material } from "../materials";
import DishItem from "@/components/DishItem/DishItem";
import ListItems from "@/components/ListItems/ListItemsDishes";
import { GetServerSideProps } from "next";

export type Dish = {
  id: string;
  name: string;
  pvp: number;
  cost: number;
  materials: { material: Material; amount: number }[];
};

type DishesProps = {
  dishes: Dish[];
  error?: string;
};

function Dishes({ dishes, error }: DishesProps) {
  return (
    <>
      <ListItems
        Component={DishItem}
        data={dishes}
        filterQuery={(query: string, data: Dish[]) => {
          return data?.filter((d) =>
            d.name.trim().toLowerCase().includes(query.trim().toLowerCase())
          );
        }}
      />
    </>
  );
}

export default Dishes;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let dishes: Dish[] = [];
    let error: string = "";
    /*
    await axios
      .get(`${process.env.BACKEND}/dishes`)
      .then((res) => {
        dishes = res.data;
      })
      .catch((err) => {
        error = err;
      });
      */
      dishes = [
        {
            id: "1",
            cost: 2.5,
            name: "Pasta con hongos",
            pvp: 3.5,
            materials: [
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
                {
                    material: { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
                    amount: 500
                },
            ]
        }

    ];
    return {
      props: {
        dishes,
        error,
      },
    };
}
