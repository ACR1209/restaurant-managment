import React from "react";
import { Order } from "@/pages/orders";

function OrderItem({
  materials,
  name,
  quantity,
  unit,
  pricePvp,
  pricePp,
  date,
  total
}: Order) {
  return (
    <div className="flex w-full justify-between bg-gray-normal p-5">
      <div className="flex justify-between w-full">
        <div>
          <div className="flex items-end">
            <h3 className="font-bold text-4xl mr-3">{name}</h3>
            <h4 className="text-2xl font-mono">x{quantity}</h4>
          </div>
          <div>
            <div className="flex justify-enter items-center space-x-5">
              <p className="text-lg">PVP/U: ${pricePvp} / plato</p>
              <p className="text-lg">Costo: ${pricePp} / plato</p>
            </div>
          </div>
        </div>
        <div className="flex items-end w-30">
        <div >
          <input
            type="number"
            //value={}
            //onChange={}
            placeholder="#1"
            className="bg-gray-white p-2 w-full "
          />
        </div>

        </div>
      </div>
    </div>
  );
}

export default OrderItem;
