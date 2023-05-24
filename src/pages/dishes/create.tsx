import CreateItems from "@/components/CreateItems/CreateItemsDish";
import DishesForm from "@/components/DishesForm/DishesForm";
import Navbar from "@/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import React from "react";
import { Material } from "../materials";

type CreateDishProps = {
  materials: Material[];
  error: string;
}

export function validateDish(data: any): boolean {
  if (!data.name || !data.pvp || !data.cost || !data.materials) {
    alert("Llene todos los campos");
    return false;
  }
  data.pvp = parseFloat(data.pvp);
  data.cost = parseFloat(data.cost);
  if (!data.pvp || data.pvp <= 0) {
    alert("El PVP debe ser un numero válido");
    return false;
  }

  if (!data.cost || data.cost <= 0) {
    alert("El costo debe ser un numero válido");
    return false;
  }
  console.log(data)
  return true;
}

function CreateDish({materials, error}: CreateDishProps) {
  

  return (
    <div className="min-h-screen max-h-screen overflow-hidden">
      <Navbar />
      <CreateItems
        Form={DishesForm}
        checkValidity={validateDish}
        title="Agregar plato"
        key="aea"
        endpoint="test"
        materials={materials}
        error={error}
        img={{ src: "/pizza.jpg", alt: "Pizza" }}
      />
    </div>
  );
}

export default CreateDish;

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
  ];
 
  return {
    props: {
      materials,
      error,
    },
  };
};

