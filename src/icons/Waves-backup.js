export default function Waves() {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" bg-slate-500 w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] absolute inset-0 m-auto"
    >
      <g transform="translate(300 300)">
        <path
          className="animate-reverse-spin-slow origin-center"
          d="M300 26C341.694 35.6257 441.952 35.7236 455.175 76.4195C471.179 125.675 500.616 196.769 551.079 208.42C602.516 220.295 535.645 321.097 551.079 371.581C574.992 449.797 423.217 428.292 455.175 503.581C479.709 561.379 360.358 571.307 300 554C239.642 536.693 206.006 489.456 144.825 503.581C101.182 513.656 59.7568 415.04 48.9211 371.581C32.0373 303.863 -15.7873 234.563 48.9211 208.42C94.1586 190.142 135.515 124.313 144.825 76.4195C153.944 29.5073 253.435 15.2495 300 26Z"
          stroke="#CE5A67"
          strokeWidth={20}
        />
        <path
          className="animate-spin-slow origin-center"
          d="M300 26C371.453 12.1109 396.287 119.205 455.175 76.4195C510.019 36.5734 485.915 189.734 551.079 208.419C606.63 224.349 523.062 321.036 551.079 371.58C570.854 407.256 458.021 462.89 455.175 503.58C450.726 567.215 343.505 600.653 300 554C265.361 516.854 186.43 532.713 144.825 503.58C83.5601 460.683 121.163 352.223 48.9211 371.58C-8.83187 387.055 25.5592 263.457 48.9211 208.419C76.581 143.257 178.059 138.924 144.825 76.4195C109.713 10.3836 226.584 40.2706 300 26Z"
          stroke="#454545"
          strokeWidth={20}
        />
        <path
          className="animate-reverse-spin-medium origin-center"
          d="M300 98C342.64 96.511 385.43 101.985 412.855 134.669C432.566 158.16 453.974 219.679 482.603 230.669C528.036 248.109 436.319 334.293 482.603 349.331C530.789 364.988 462.897 437.405 412.855 445.331C377.628 450.911 322.445 509.717 300 482C273.779 449.62 213.927 413.414 187.145 445.331C149.436 490.272 105.2 406.715 117.397 349.331C123.565 320.314 101.677 255.827 117.397 230.669C147.955 181.766 147.087 176.15 187.145 134.669C223.035 97.5036 248.366 99.8031 300 98Z"
          stroke="#CE5A67"
          strokeWidth="20"
        />
        <path
          className="animate-spin-medium origin-center"
          d="M300 146C321.491 151.758 368.369 188.675 384.641 173.502C411.152 148.78 453.409 213.203 436.952 245.502C424.127 270.672 435.474 306.288 436.952 334.498C439.006 373.694 423.598 401.715 384.641 406.498C340.722 411.891 304.625 389.993 300 434C297.674 456.127 226.484 425.767 215.359 406.498C199.234 378.57 195.292 333.936 163.048 334.498C125.804 335.149 184.942 275.637 163.048 245.502C138.802 212.13 233.441 210.576 215.359 173.502C200.345 142.719 266.918 137.136 300 146Z"
          stroke="#454545"
          strokeWidth={20}
        />
        <path
          className="animate-reverse-spin-slow origin-center"
          d="M300 194C320.82 193.273 342.488 227.816 356.427 212.334C366.352 201.311 377.043 256.246 391.301 260.334C416.134 267.455 366.876 311.255 391.301 319.666C411.945 326.774 378.23 368.808 356.427 367.666C330.63 366.314 320.357 401.904 300 386C281.219 371.327 265.968 359.514 243.573 367.666C222.117 375.475 230.753 325.575 208.699 319.666C182.78 312.721 184.38 271.674 208.699 260.334C233.924 248.572 245.998 240.061 243.573 212.334C242.28 197.558 285.176 194.518 300 194Z"
          stroke="#CE5A67"
          strokeWidth={20}
        />
        <path
          className="animate-spin-slow origin-center"
          d="M300 194C313.09 219.69 329.333 222.196 356.427 212.334C371.305 206.919 385.115 245.76 391.301 260.334C400.614 282.273 411.289 306.685 391.301 319.666C377.184 328.833 351.506 351.568 356.427 367.666C364.565 394.282 319.681 366.319 300 386C287.39 398.61 260.33 373.765 243.573 367.666C223.056 360.198 198.787 339.119 208.699 319.666C217.248 302.885 205.105 278.821 208.699 260.334C211.529 245.774 230.356 219.068 243.573 212.334C260.353 203.784 291.45 177.22 300 194Z"
          stroke="#454545"
          strokeWidth={20}
        />
      </g>
    </svg>
  );
}
