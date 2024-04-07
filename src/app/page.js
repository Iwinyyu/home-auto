import Svgs from "./(home)/(svgs)/SVGs";
import Onebridge from "./onebridge";
import Categories from "./categories";
import Title from "./title";
import Image from "next/image";

import products from "./items";

export default function Home() {
  return (
    <main className="gap-14 flex flex-col items-center py-10 px-11 md:px-24">
      <Title />
      <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[650px] lg:h-[600px]">
        <Svgs />
      </div>
      <div className="oneBridge flex flex-col items-center gap-10 w-full">
        {" "}
        <Onebridge />
      </div>
      {/* <div className="partners flex flex-col items-center gap-10 w-11/12 bg-slate-300">
        {" "}
        <Partner />{" "}
      </div> */}
      <div className="categories flex flex-col items-center gap-10 w-full">
        {" "}
        <Categories />
      </div>
      {/* <Image
        src={products[0].image}
        width={500}
        className="aspect-video object-cover"
      ></Image> */}
      <div className="bestSellers"></div>
    </main>
  );
}
