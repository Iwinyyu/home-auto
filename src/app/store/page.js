"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Checkbox from "./checkbox";
import { Roboto } from "next/font/google";
import Card from "./card";
import Filter from "./filter";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export default function page() {
  const [Checked, SetChecked] = useState(false);
  function HandleToggle() {
    SetChecked(!Checked);
  }
  return (
    <main
      className={`flex px-24 flex-col items-center transition ease-out duration-300 w-screen h-screen ${
        Checked ? "bg-[#1F1717] " : ""
      }`}
    >
      <div
        className={`${roboto.className} tracking-wide select-none text-4xl lg:text-5xl md:text-5xl font-sans flex justify-center items-center uppercase secondarytext font-extrabold h-40 mb-8`}
      >
        {" "}
        smart h<Checkbox HandleToggle={HandleToggle} Checked={Checked} />
        me
      </div>
      <div className="productslists w-full h-full bg-slate-500">
        <Filter />
      </div>
    </main>
  );
}
