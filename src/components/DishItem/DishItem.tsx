import { Dish } from "@/pages/dishes";
import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi";

function DishItem({ name, pvp, cost, materials }: Dish) {
  return (
    <div className="flex justify-between shadow-md p-5">
      <div>
        <h3 className="text-4xl font-bold">{name}</h3>
        <div className="flex space-x-5">
          <p>PVP/U: ${pvp} / plato</p>
          <p>Costo/U: ${cost} / plato</p>
        </div>
      </div>

      <div className="w-1/3">
        <h4 className="font-bold text-xl">Ingredientes:</h4>
        <p className="text-clip">
        {materials.map((m) => (
            <>
            {m.amount}
            {m.material.unit} {m.material.name},
            </>
        ))}
        </p>
      </div>

      <div className="flex items-center text-4xl">
        <HiPencil className="text-blue-600 cursor-pointer hover:scale-105 transition-all" />
        <HiTrash className="text-red-normal cursor-pointer hover:scale-105 transition-all" />
      </div>
    </div>
  );
}

export default DishItem;
