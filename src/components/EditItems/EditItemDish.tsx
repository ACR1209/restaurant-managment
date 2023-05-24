import { Material } from "@/pages/materials";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { type } from "os";
import React, { FormEvent, useState } from "react";
import { Type } from "typescript";
import { DishesFormProps } from "../DishesForm/DishesForm";

export type FormProps = {
  handleChange: (data: any) => void;
  data: any;
};

type CreateItemsProps<T> = {
  Form: React.FC<DishesFormProps>;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  checkValidity: (data: any) => boolean;
  endpoint: string;
  materials: Material[];
  error: string;
  data: any
};

export type Dish = {
  id: string;
  name: string;
  pvp: number;
  cost: number;
  materials: { material: Material; amount: number }[];
};

function CreateItems({
  Form,
  img,
  title,
  checkValidity,
  endpoint,
  materials,
  error,
  data
}: CreateItemsProps<Dish>) {
  const [formData, setFormData] = useState(data);

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData)
    if (!checkValidity(formData)) {
      return;
    }
    console.log(formData)
    axios
      .post(endpoint, formData)
      .then((res) => {
        router.push("/materials");
      })
      .catch((err) => {
        alert("Error al registrar!" + e);
      });
  }

  return (
    <div className="h-full flex">
      <Image
        width={2000}
        height={2000}
        src={img.src}
        alt={img.alt}
        className="w-1/2 object-cover"
      />
      <div className="w-1/2 p-5">
        <h2 className="text-6xl font-bold w-2/3 mb-5">{title}</h2>
        <form onSubmit={handleSubmit}>
          <Form data={formData} materials={materials} error={error} handleChange={setFormData} />
          <div className="w-full flex justify-end p-2">
            <input
              type="submit"
              value="Registrar"
              className="bg-blued-normal p-3 font-bold text-white cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateItems;
