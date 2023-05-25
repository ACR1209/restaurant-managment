import React from "react";
import { FaSearch } from "react-icons/fa";
function DishInput() {
  return (
    <div className=" w-full flex space-x-5 p-5">
      <div className="w-screen font-bold">
        <p>Plato</p>
        <div className="max-w-5">
          <div className="items-end relative">
            <button
              className="absolute w-10 h-10 right-0 bg-image"
              style={{ backgroundImage: `url('/path/to/image.jpg')` }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              //value={}
              //onChange={}
              placeholder="Buscar..."
              className="bg-gray-normal p-2 w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-70 font-bold">
        <p>Cantidad</p>
        <input
          type="number"
          //value={}
          //onChange={}
          placeholder="#1"
          className="bg-gray-normal p-2 w-full"
        />
      </div>

      <div className="flex items-end w-80">
        <button className="w-40 bg-blue-500 p-2 font-bold">Agregar</button>
      </div>
    </div>
  );
}

export default DishInput;
