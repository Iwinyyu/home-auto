export default function Alexa(params) {
  return (
    <button className="col-start-1 col-span-3">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
      >
        <path
          d="M50 100C22.43 100 0 77.57 0 50C0 22.43 22.43 0 50 0C77.57 0 100 22.43 100 50C100 77.57 77.57 100 50 100Z"
          fill="url(#paint0_linear_6_155)"
        />
        <path
          d="M84 50C84 65.94 74.06 89.84 42.3 99.4C42.2 99.4 42.1 99.38 42 99.34V87.44C42 84.88 40.34 82.68 37.96 81.76C24 76.48 14.42 62.28 16.22 46.1C17.96 30.52 30.54 17.94 46.1 16.22C66.62 13.94 84 29.94 84 50Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6_155"
            x1="50"
            y1="145.652"
            x2="50"
            y2="15.028"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#005CE2" />
            <stop offset="0.278" stopColor="#0080E8" />
            <stop offset="0.569" stopColor="#009CED" />
            <stop offset="0.82" stopColor="#00B0F1" />
            <stop offset="1" stopColor="#00B5F2" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
