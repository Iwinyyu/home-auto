import { Roboto } from "next/font/google";
import { Fragment } from "react";
import Image from "next/image";
import blind from "../../icons/blinds.png";
import camera from "../../icons/camera.avif";
import garage from "../../icons/garage.jpeg";
import plug from "../../icons/plug.jpg";
import bulb from "../../icons/smartbulb.jpg";
import thermo from "../../icons/thermo.jpg";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Categories(params) {
  return (
    <main className="flex flex-col items-center ">
      <div className="w-fit -space-y-4">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-center uppercase secondarytext font-extrabold`}
        >
          Product
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-center font-medium">
          categories
        </h1>
      </div>
      <div className="bg-stone-700 grid grid-flow-col w-3/4 auto-cols-30 gap-4 overflow-y-hidden overflow-x-auto">
        <button className="size-fit p-3">
          <Image src={blind} alt="blind"></Image>
          <span className="uppercase">blind</span>
        </button>
        <button className="size-fit p-3">
          <Image src={thermo} alt="blind"></Image>
          <span className="uppercase">blind</span>
        </button>

        <button className="size-fit p-3">
          <Image src={garage} alt="garage"></Image>
          <span className="uppercase">blind</span>
        </button>

        <button className="size-fit p-3">
          <Image src={plug} alt="plug"></Image>
          <span className="uppercase">blind</span>
        </button>

        <button className="size-fit p-3">
          <Image src={bulb} alt="bulb"></Image>
          <span className="uppercase">blind</span>
        </button>
        <button className="size-fit p-3">
          <Image src={camera} alt="camera" className="w-full "></Image>
          <span className="uppercase">blind</span>
        </button>
      </div>
    </main>
  );
}
