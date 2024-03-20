import { Roboto } from "next/font/google";
import "../globals.css"


const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "HomeAuto",
  description: "Home Auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <h1 className="bg-red-300 text-black w-svw flex justify-center align-center h-5">homeauto</h1>
        {children}
      </body>
    </html>
  );
}
