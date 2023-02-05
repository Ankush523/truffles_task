/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white1: "#FFFFFF",
      white2: "#F5F5F5",
      white3: "#F8F8F8",
      grey1: "#e5e7eb",
      grey2: "#67748E",
      grey3: "#FAFAFA",
      grey4: "#6B7280",
      blue1: "#252F40",
      purple1: "#8553FB",
      purple2: "#7445F8",
      black1: "#000000",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
