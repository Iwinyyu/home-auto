"use client";

import Image from "next/image";
import products from "../items";
import { useState } from "react";

export default function Card() {
  const [Hovered, SetHovered] = useState(false);
  return (
    <div className="z-0 transiton duration-150 ease-in-out bg-white  h-[400px] w-[300px] rounded-lg relative hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg">
      <div className="w-20 h-20 flex items-center justify-center rounded-full lasttextcolor secondarycolor font-bold text-base absolute -translate-x-6 -translate-y-6">
        ${products[0].Price}
      </div>
      <Image
        src={products[0].image}
        alt={products[0].Name}
        className="h-3/5 object-cover rounded-lg"
      ></Image>
      <div className="flex justify-center font-extrabold text-2xl uppercase border-0 border-b-4 border-[#CE5A67] border-solid">
        {products[0].Name}
      </div>
      <div className="flex justify-center items-center px-5 text-gray-700/70">
        {products[0].description}
      </div>
      <div className=" transition duration-150 ease-in-out absolute inset-0 opacity-0 hover:opacity-100">
        <button className="w-28 h-12 rounded-lg secondarycolor flex justify-center items-center absolute cursor-pointer right-7 -bottom-7">
          <span className="font-bold uppercase text-sm lasttextcolor">
            buy now
          </span>
        </button>
      </div>
    </div>
  );
}
