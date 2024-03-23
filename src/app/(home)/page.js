import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});


export default function Home() {
  return (
    <main className="flex items-center bg-slate-400 justify-center py-10 px-24">
      <div className=" bg-white w-2/6">
      <h1 className={`${roboto.className} font-sans capitalize secondarytext text-6xl font-extrabold`}>home</h1>
      <h1 className="capitalize ">automation</h1>

      </div>

    </main>
  );
}
