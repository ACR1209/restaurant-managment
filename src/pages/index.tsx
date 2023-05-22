import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Option from "@/components/Option/Option";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <main className={`${inter.className} flex h-full items-center justify-center`}>
        <div className="grid grid-cols-3">

          <Option
            to="/materials"
            img={{ src: "/vegetable.jpg", alt: "Vegetales varios" }}
            name="Inventario de materia prima"
          />
          <Option
            to="/dishes"
            img={{ src: "/pizza.jpg", alt: "Vegetales varios" }}
            name="Gestión de platos"
          />
          <Option
            to="/materials"
            img={{ src: "/coin.jpg", alt: "Vegetales varios" }}
            name="Realizar orden de compra"
          />
        </div>
      </main>
    </div>
  );
}
