import { GetServerSideProps } from "next";
import React from "react";
import { Material } from "..";
import Navbar from "@/components/Navbar/Navbar";
import CreateItems from "@/components/EditItems/EditItems";
import MaterialsForm from "@/components/MaterialsForm/MaterialsFormEdit";
import { validateMaterial } from "../create";

type EditProps = {
  material: Material | undefined;
};

function Edit({ material }: EditProps) {
  return (
    <div className="min-h-screen max-h-screen overflow-hidden">
      <Navbar />
      <CreateItems
        Form={MaterialsForm}
        checkValidity={validateMaterial}
        data={material}
        endpoint={`/test/edit/${material?.id}`}
        img={{ src: "/vegetable.jpg", alt: "Vegetales" }}
        title="Editar ingrediente"
        key="aeae"
      />
    </div>
  );
}

export default Edit;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let material: Material | undefined;
  let error: string = "";
  const { id } = ctx.query;

  /*
    await axios
      .get(`${process.env.BACKEND}/materials/{id}`)
      .then((res) => {
        material = res.data;
      })
      .catch((err) => {
        error = err;
      });
      */
  let materials: Material[] = [
    { id: "1", name: "Tomate", price_unit: 0.6, unit: "GR", stock: 1000 },
    { id: "2", name: "Papa", price_unit: 0.6, unit: "GR", stock: 1000 },
  ];

  material = materials.filter((m) => m.id === id)
    ? materials.filter((m) => m.id === id)[0]
    : undefined;
  console.log(material);
  return {
    props: {
      material,
    },
  };
};
