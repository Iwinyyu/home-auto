/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-medium": "spin 6s linear infinite",
        "spin-mediumfast": "spin 4s linear infinite",
        "spin-fast": "spin 2s linear infinite",

        "reverse-spin-slow": "reverse-spin 8s linear infinite",
        "reverse-spin-medium": "reverse-spin 6s linear infinite",
        "reverse-spin-mediumfast": "reverse-spin 4s linear infinite",
        "reverse-spin-fast": "reverse-spin 2s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        inner: "inset 0 0px 10px 0 rgb(206 90 103 / 0.5);",
      },
    },
    gridAutoColumns: {
      30: "70%",
    },
    gridAutoRows: {
      30: "50%",
    },
  },
  plugins: [],
};
