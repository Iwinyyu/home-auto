"use client";

import { Roboto } from "next/font/google";
import { Fragment } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Title() {
  return (
    <main className="w-10/12 md:w-2/3 lg:w-1/2 min-w-[350px] flex flex-col items-center">
      <div className="w-full flex flex-col -space-y-4 max-w-[300px] md:max-w-[450px]">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-start uppercase secondarytext font-extrabold`}
        >
          home
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-end font-medium">
          automation
        </h1>
      </div>

      <p className="text-base md:text-xl md:w-full lg:w-full text-center max-w-xl leading-6 primarytext">
        Utilizing our cutting-edge{" "}
        <span className="uppercase secondarytext">mesh</span> technology, we
        enable smart home industry to efficiently automate residences, offering
        swift deployment of innovative solutions for homeowners.
      </p>
    </main>
  );
}
