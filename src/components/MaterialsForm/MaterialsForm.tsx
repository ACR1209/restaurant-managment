import React, {useEffect} from "react";
import { FormProps } from "../CreateItems/CreateItems";

function MaterialsForm({ data, handleChange }: FormProps) {

  useEffect(() => {
    handleChange({
        name: "",
        price: 0,
        quantity: 0,
        unit: "KG",
      })
  }, [])
  
    
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
          className="w-full p-2 bg-gray-normal"
        />
      </div>
      <div className="w-full mb-2 p-2">
        <label>Precio Unitario</label>
        <input
          type="text"
          onChange={(e) =>
            handleChange({ ...data, [e.target.name]: e.target.value })
          }
          name="price"
          className="w-full p-2 bg-gray-normal"
        />
      </div>
      <div className="flex mb-2">
        <div className="w-1/2 p-2">
          <label>Cantidad</label>
          <input
            type="number"
            onChange={(e) =>
              handleChange({ ...data, [e.target.name]: e.target.value })
            }
            name="quantity"
            className="w-full p-2 bg-gray-normal"
          />
        </div>
        <div className="w-1/2 flex flex-col p-2">
          <label>Unidad</label>
          <select
            onChange={(e) =>
              handleChange({ ...data, [e.target.name]: e.target.value })
            }
            name="unit"
            className="w-full p-2 bg-gray-normal border-0"
          >
            <option disabled  >Unidad...</option>
            <option>KG</option>
            <option>GR</option>
            <option>LB</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default MaterialsForm;
