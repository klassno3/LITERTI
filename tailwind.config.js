/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'primary-100': '#5917AD', 
      'primary-200': '#8839ED', 
      'primary-300': '#B482F3', 
      'secondary-100': '#CBC2D6', 
      'secondary-200': '#ffffff', 
      'secondary-300': '#A68CC6', 
      'tertiary-100': '#040B19', 
      'tertiary-200': '#192231', 
  
    },
    
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif "
      }
    },
  },
  plugins: [],
}