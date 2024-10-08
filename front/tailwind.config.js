import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {

 
   

  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/preline/dist/*.js',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.js"
  ],

  theme: {
    extend: {
      container: {
        center: true,
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),  require('preline/plugin'),],
}