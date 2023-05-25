import CreateItems from "@/components/CreateItems/CreateItems";
import MaterialsForm from "@/components/MaterialsForm/MaterialsForm";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export function validateMaterial(data: any): boolean {
  if (!data.name || !data.price || !data.quantity || !data.unit) {
    alert("Llene todos los campos");
    return false;
  }
  data.price = parseFloat(data.price);
  data.quantity = parseInt(data.quantity);
  if (!data.price || data.price <= 0) {
    alert("El precio debe ser un numero válido");
    return false;
  }

  if (!data.quantity || data.quantity <= 0) {
    alert("La cantidad debe ser un numero válido");
    return false;
  }

  return true;
}

function Create() {
  return (
    <div className="max-h-screen h-screen overflow-hidden">
      <Navbar />

      <CreateItems
        Form={MaterialsForm}
        img={{ src: "/vegetable.jpg", alt: "aea" }}
        endpoint="test"
        title="Insertar materia prima"
        checkValidity={validateMaterial}
        key="aeae"
      />
    </div>
  );
}

export default Create;
