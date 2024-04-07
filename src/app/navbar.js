"use client";
import Image from "next/image";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import option from "../icons/option.svg";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header
      className={`secondarycolor top-0 left-0 right-0 flex justify-start items-center h-9 z-0`}
    >
      <button className="lg:hidden md:hidden sm:block w-9 ml-2 cursor-pointer z-10">
        <Image src={option} alt="navbar" width="64" height="64"></Image>
      </button>
      <Link
        href={"/"}
        className={`${roboto.className} font-extrabold text-2xl secondarytext ml-4 w-fit h-fit z-10 flex`}
      >
        HomeAuto
      </Link>
      <Link
        href={"/store"}
        className={`link ${pathname === "/store" ? "active" : ""} ${
          roboto.className
        } font-bold text-lg italic cursor-pointer w-fit h-fit  premarytext ml-4`}
      >
        Shop
      </Link>
    </header>
  );
}
