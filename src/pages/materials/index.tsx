import ListItems from "@/components/ListItems/ListItems";
import MaterialItem from "@/components/MaterialItem/MaterialItem";
import Navbar from "@/components/Navbar/Navbar";
import { data } from "autoprefixer";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

export type Material = {
  id: string;
  name: string;
  stock: number;
  unit: string;
  price_unit: number;
};

type MaterialsProps = {
  materials: Material[];
  error?: string;
};

function Materials({ materials, error }: MaterialsProps) {
  return (
    <>
      <ListItems
        Component={MaterialItem}
        data={materials}
        key="aea"
        filterQuery={(query: string, data: Material[]) => {
          return data.filter((d) =>
             d.name.trim().toLowerCase().includes(query.trim().toLowerCase())
          );
        }}
      />
    </>
  );
}

export default Materials;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let materials: Material[] = [];
  let error: string = "";
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
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
  ];
  return {
    props: {
      materials,
      error,
    },
  };
};
