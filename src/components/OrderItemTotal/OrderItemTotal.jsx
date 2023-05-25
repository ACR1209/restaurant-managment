import React from "react";

function OrderItemTotal() {
  return (
    <div className="text-lg font-bold">
      <div className="w-full p-5 text-white space-x-5">
        <div className="p-5 bg-gray-900 flex justify-between items-center text-3xl ">
          <p className="">Total</p>
          <div className="space-x-20 items-center flex ">
            <div className=" items-end">
              <p>Ingresos: $</p>
              <p>Costos: $</p>
            </div>
            <button className="bg-white text-black w-40 h-20">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItemTotal;
