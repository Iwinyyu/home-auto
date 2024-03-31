// import Waves from "./(svgs)/Waves";
// import Bulb from "./(svgs)/lightbulb";
// import Apple from "./(svgs)/apple";
// import Philips from "./(svgs)/philips";
// import Google from "./(svgs)/google";
// import Alexa from "./(svgs)/alexa";
// import Ikea from "./(svgs)/ikea";
// import Ifttt from "./(svgs)/Component";
import Svgs from "./(svgs)/SVGs";
import Onebridge from "./onebridge";
import Partner from "./partners";
import Categories from "./categories";

import Title from "./title";

export default function Home() {
  return (
    <main className="gap-8 flex flex-col items-center py-10 px-11 md:px-24">
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
      <div className="categories flex flex-col items-center gap-10 bg-slate-300">
        {" "}
        <Categories />{" "}
      </div>
      <div className="bestSellers"></div>
    </main>
  );
}
