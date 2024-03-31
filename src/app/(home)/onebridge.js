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

export default function Onebridge(params) {
  return (
    <Fragment>
      <div className="w-fit flex flex-col -space-y-4 max-w-md">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-center uppercase secondarytext font-extrabold`}
        >
          introducing
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-center font-medium">
          onebridge
        </h1>
      </div>
      <div className=" w-2/3 md:w-4/5 lg: max-w-[900px] md:min-w-[650px] min-w-[350px] flex justify-center">
        <button>
          <Image
            src={Onebridge}
            alt="onebridge"
            className="w-[250px] md:w-[450px] lg:w-[450px]"
          ></Image>
        </button>
        {/* <div className="w-10 h-10 bg-black absolute "></div> */}
      </div>
    </Fragment>
  );
}
