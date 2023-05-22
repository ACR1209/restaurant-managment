import Image from "next/image";
import Link from "next/link";
import React from "react";

type OptionProps = {
  to: string;
  img: {
    src: string;
    alt: string;
  };
  name: string;
};

function Option({ to, img, name }: OptionProps) {
  return (
    <Link
        href={to}
        className="w-full p-10 h-1/2 flex flex-col items-center justify-center hover:scale-110 transition-all"
    >
      <Image className="object-cover rounded-xl w-full h-full" width={1000} height={1000} src={img.src} alt={img.alt} />
      <h2 className="text-2xl font-bold">{name}</h2>

    </Link>
  );
}

export default Option;
