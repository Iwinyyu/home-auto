import { Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "./navbar";

import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "text",
  description: "Home Auto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-sans`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
