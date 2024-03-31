import { Fragment } from "react";
import Onebridge from "../../icons/onebridge.webp";
import Image from "next/image";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Partner(params) {
  return (
    <Fragment>
      <div className="w-fit flex flex-col -space-y-4">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-center uppercase secondarytext font-extrabold`}
        >
          partnering
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-center font-medium">
          brands
        </h1>
      </div>
    </Fragment>
  );
}
