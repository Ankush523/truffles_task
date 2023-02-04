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
    colors : {
      'green1' : '#7DCE13',
      'green2' : '#3EC70B',
      'green3' : '#2B7A0B',
      'yellow1' : '#EAE509',
      'white1' : '#FFFFFF',
      'grey1' : '#e5e7eb',
      'black1' : '#000000',
      'white2':'#F5F5F5',
      'white3' : '#F8F8F8',
      'blue1' : '#252F40',
      'purple1' : '#8553FB',
      'grey2' : '#67748E',
    },
    extend: {},
  },
  plugins: [],
}