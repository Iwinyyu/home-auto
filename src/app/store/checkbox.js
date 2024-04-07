"use client";

import { useState } from "react";

export default function Checkbox({ HandleToggle, Checked }) {
  return (
    <div
      className={`mx-[1px] w-[70px] h-[40px] rounded-full cursor-pointer relative ${
        Checked ? "bg-[#FCF5ED]" : "bg-[#1F1717]"
      }`}
      onClick={HandleToggle}
    >
      <input type="checkbox" className="hidden" />
      <div
        className={`transition ease-out duration-500 absolute select-none w-[30px] h-[30px] rounded-full m-[5px] ${
          Checked ? "translate-x-[30px] bg-[#1F1717]" : "bg-[#FCF5ED]"
        }`}
      ></div>
    </div>
  );
}
