import { Roboto } from "next/font/google";
import { Fragment } from "react";
import Image from "next/image";
import blind from "../icons/blinds.png";
import camera from "../icons/camera.avif";
import garage from "../icons/garage.jpeg";
import plug from "../icons/plug.jpg";
import bulb from "../icons/smartbulb.jpg";
import thermo from "../icons/thermo.jpg";
const images = [
  {
    photo: blind,
    title: "blinds",
  },
  {
    photo: camera,
    title: "camera",
  },
  {
    photo: garage,
    title: "garage",
  },
  {
    photo: plug,
    title: "plug",
  },
  {
    photo: bulb,
    title: "bulb",
  },
  {
    photo: thermo,
    title: "thermo",
  },
];

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Categories(params) {
  return (
    <Fragment>
      <div className="flex flex-col items-center w-fit -space-y-4">
        <h1
          className={`${roboto.className} text-4xl lg:text-5xl md:text-5xl font-sans tracking-widest flex justify-center uppercase secondarytext font-extrabold`}
        >
          Product
        </h1>
        <h1 className="uppercase text-4xl lg:text-5xl md:text-5xl italic tracking-wider flex justify-center font-medium">
          categories
        </h1>
      </div>

      <div className="w-screen snap-x md:w-5/6 max-w-[1200px] grid grid-flow-col auto-cols-30 gap-5 overflow-y-hidden overflow-x-auto">
        {images.map((e, idx) => (
          <button className="w-full p-3 snap-center " key={idx}>
            <span
              className={`${roboto.className} font-bold text-xl uppercase secondarytext`}
            >
              {e.title}
            </span>
            <Image
              src={e.photo}
              alt={e.title}
              className="w-full aspect-video object-cover "
            ></Image>
          </button>
        ))}
      </div>
    </Fragment>
  );
}
