import Waves from "./Waves";
import Bulb from "./lightbulb";
import Title from "./title";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-10 px-11 md:px-24">
      <Title />
      <div className="mt-8 h-[600px] w-[650px] relative">
        <Waves />
        <Bulb />
      </div>
    </main>
  );
}



{/* <Image
  src={bulb}
  alt="navbar"
  width={95}
  height={95}
  className=" absolute inset-0 m-auto"
></Image> */}
