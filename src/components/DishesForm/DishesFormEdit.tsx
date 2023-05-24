import React, { useState } from "react";
import { Material } from "@/pages/materials";
import MaterialTag from "../MaterialTag/MaterialTag";

export type DishesFormProps = {
  data: any;
  materials?: Material[];
  error?: string;
  handleChange: (data: any) => void;
};

type ItemToAdd = {
  idItem: string;
  amount: number;
};

function DishesForm({ data, handleChange, materials, error }: DishesFormProps) {
  const [itemToAdd, setItemToAdd] = useState<ItemToAdd>({
    idItem: "",
    amount: 0,
  });

  function handleAdd(e: any) {
    e.preventDefault();

    let itemAmount = parseInt(`${itemToAdd.amount}`)

    if (itemAmount != itemToAdd.amount) {
      alert("La cantidad debe ser un numero entero")
      return
    }

    if (!itemToAdd.amount || !itemToAdd.idItem) {
      alert("Llene el la cantidad y el ingrediente!")
      return
    }


    let dataMaterials = data?.materials ? data?.materials : []
    let completeItem: Material | undefined = materials?.filter((m)=> m.id === itemToAdd.idItem)[0]
    let isCreate = dataMaterials?.filter((m: any)=> m.material.id === itemToAdd.idItem ) ? false : true


    if(isCreate){
      let itemComplete = {amount: itemToAdd.amount, material: {id:completeItem?.id, name: completeItem?.name, unit: completeItem?.unit} }
      dataMaterials?.push(itemComplete)
  
      handleChange({...data, materials: dataMaterials})
      return
    }
    let dataNoAlready = dataMaterials?.filter((m: any)=> m.material.id !== itemToAdd.idItem )
    let itemComplete = {amount: itemToAdd.amount, material: { id:completeItem?.id, name: completeItem?.name, unit: completeItem?.unit }}
    dataNoAlready?.push(itemComplete)
    handleChange({...data, materials: dataNoAlready})
  }

  function removeMaterial(id:string) {
    let dataMaterials = data?.materials ? data?.materials : []

    let dataNoAlready = dataMaterials?.filter((m: any)=> m?.material?.id !== id )
    handleChange({...data, materials: dataNoAlready})
  }

  return (
    <>
      <div className="w-full mb-2 p-2">
        <label>Nombre</label>
        <input
          type="text"
          onChange={(e) =>
            handleChange({ ...data, [e.target.name]: e.target.value })
          }
          name="name"
          value={data?.name}
          className="w-full p-2 bg-gray-normal"
        />
      </div>
      <div className="flex">
        <div className="w-1/2 mb-2 p-2">
          <label>PVP</label>
          <input
            type="text"
            onChange={(e) =>
              handleChange({ ...data, [e.target.name]: e.target.value })
            }
            name="pvp"
            value={data?.pvp}
            className="w-full p-2 bg-gray-normal"
          />
        </div>
        <div className="w-1/2 mb-2 p-2">
          <label>Costo</label>
          <input
            type="text"
            onChange={(e) =>
              handleChange({ ...data, [e.target.name]: e.target.value })
            }
            name="cost"
            value={data?.cost}
            className="w-full p-2 bg-gray-normal"
          />
        </div>
      </div>

      <div className="w-full flex items-end">
        <div className="w-3/6 mb-2 p-2">
          <label>Material</label>
          <select
            className="w-full p-2 bg-gray-normal border-0"
            onChange={(e) =>
              setItemToAdd({ ...itemToAdd, [e.target.name]: e.target.value })
            }
            name="idItem"
            value={itemToAdd.idItem || ""}
          >
            <option value={""} defaultChecked disabled>Seleccione...</option>
            {materials?.map((m) => (
              <option value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
        <div className="w-2/6 mb-2 p-2">
          <label>Cantidad</label>
          <div className="flex">
            <input
              type="number"
              onChange={(e) =>
                setItemToAdd({ ...itemToAdd, [e.target.name]: e.target.value })
              }
              name="amount"
              className="w-full p-2 bg-gray-normal"
            />
            <div className="flex items-center justify-center  bg-black text-white p-2">{itemToAdd.idItem ? materials?.filter((m) => m.id == itemToAdd.idItem)[0].unit : ""}</div>
          </div>
        </div>
        <div className="w-1/6 mb-2 h-full p-2">
          <button
            className="p-2 bg-black text-white w-full"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-wrap space-x-3 p-2">
        {data?.materials?.map((m: any) => (
          <MaterialTag amount={m.amount} material={m.material} removeMaterial={removeMaterial} />
        ))}
      </div>
    </>
  );
}

export default DishesForm;
