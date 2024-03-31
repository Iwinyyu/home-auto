"use client";
import { useState } from "react";

export default function Bulb(props) {
  const [color, setColor] = useState("black");
  function handleclick() {
    setColor(color == "white" ? "black" : "white");
  }

  return (
    <button
      className="absolute size-fit inset-0 m-auto z-10"
      onClick={handleclick}
    >
      <svg
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[95px] lg:h-[95px]"
      >
        <path
          d="M47.5 79.6209C42.8298 79.6144 38.3526 77.7565 35.05 74.4544C31.7474 71.1523 29.8888 66.6754 29.8816 62.0051V59.0466C24.1837 55.2626 19.8555 49.7446 17.5377 43.3094C15.2198 36.8742 15.0353 29.8638 17.0116 23.3156C18.9879 16.7674 23.0199 11.0295 28.5109 6.95111C34.0019 2.87271 40.6601 0.670547 47.5 0.670547C54.3399 0.670547 60.9981 2.87271 66.4891 6.95111C71.9801 11.0295 76.0121 16.7674 77.9884 23.3156C79.9647 29.8638 79.7803 36.8742 77.4624 43.3094C75.1445 49.7446 70.8163 55.2626 65.1184 59.0466V62.0079C65.1105 66.6776 63.2516 71.1538 59.9491 74.4553C56.6465 77.7569 52.1698 79.6144 47.5 79.6209ZM47.5 7.46429C41.9844 7.46623 36.6236 9.28768 32.2485 12.6463C27.8734 16.0048 24.7285 20.7129 23.3013 26.0406C21.8742 31.3683 22.2444 37.0181 24.3548 42.114C26.4651 47.2098 30.1976 51.4672 34.9736 54.226C35.489 54.5236 35.9169 54.9517 36.2143 55.4673C36.5116 55.9829 36.6679 56.5677 36.6673 57.1629V62.0051C36.6673 64.8782 37.8086 67.6335 39.8401 69.665C41.8716 71.6966 44.627 72.8379 47.5 72.8379C50.373 72.8379 53.1284 71.6966 55.1599 69.665C57.1914 67.6335 58.3327 64.8782 58.3327 62.0051V57.1629C58.3326 56.5688 58.4885 55.9851 58.7848 55.4702C59.0811 54.9553 59.5074 54.5272 60.021 54.2287C64.8001 51.4721 68.5358 47.2153 70.6486 42.1188C72.7614 37.0223 73.1332 31.371 71.7062 26.0416C70.2793 20.7122 67.1335 16.0027 62.7567 12.6438C58.38 9.28481 53.0171 7.46416 47.5 7.46429Z"
          fill={color}
        />
        <path
          d="M57.1303 94.3214H37.8589C36.959 94.3214 36.096 93.964 35.4597 93.3277C34.8235 92.6914 34.466 91.8284 34.466 90.9286C34.466 90.0287 34.8235 89.1657 35.4597 88.5295C36.096 87.8932 36.959 87.5357 37.8589 87.5357H57.1303C58.0301 87.5357 58.8931 87.8932 59.5294 88.5295C60.1657 89.1657 60.5231 90.0287 60.5231 90.9286C60.5231 91.8284 60.1657 92.6914 59.5294 93.3277C58.8931 93.964 58.0301 94.3214 57.1303 94.3214Z"
          fill={color}
        />
      </svg>
    </button>
  );
}