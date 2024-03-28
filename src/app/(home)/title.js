"use client"

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Title(props) {
  return(
    <main className="flex flex-col items-center">
      <div className="w-7/8 md:w-1/2 lg:w-2/5 flex flex-col -space-y-4 max-w-md bg-slate-300 md:bg-slate-400 lg:bg-slate-500">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-start uppercase secondarytext font-extrabold`}
        >
          home
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-end font-medium">
          automation
        </h1>
      </div>
      <p className="text-base md:text-xl w-5/7 md:w-2/3 lg:w-1/2 text-center leading-6 primarytext">
        Utilizing our cutting-edge{" "}
        <span className="uppercase secondarytext">mesh</span> technology, we
        enable smart home industry to efficiently automate residences, offering
        swift deployment of innovative solutions for homeowners.
      </p>
    </main>
  )
};
