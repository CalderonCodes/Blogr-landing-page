/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {

  LightRed : 'hsl(356, 100%, 66%)',
  VeryLightRed : 'hsl(355, 100%, 74%)',
  VeryDarkBlue : 'hsl(208, 49%, 24%)',
  White : 'hsl(0, 0%, 100%)',
  GrayishBlue : 'hsl(240, 2%, 79%)',
  VeryDarkGrayishBlue : 'hsl(207, 13%, 34%)',
 VeryDarkBlackBlue : 'hsl(240, 10%, 16%)',
 /** Bg gradient mobile nav*/
  VeryLightRedGradient : 'hsl(13, 100%, 72%)',
  LightRedGradient : 'hsl(353, 100%, 62%)',

  /** Bg gradient body */
  VeryDarkBlueGradient : 'hsl(237, 17%, 21%)',
  VeryDarkDesaturatedBlue : 'hsl(237, 23%, 32%)',


    },
    extend: {
    },
    fontFamily: {
      Overpass: ['Overpass'],
      
      Ubuntu: ['Ubuntu']
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}