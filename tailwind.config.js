/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    
    extend: {
      colors: {
        'primary-100': '#5917AD', 
        'primary-200': '#8839ED', 
        'primary-300': '#B482F3', 
        'secondary-100': '#CBC2D6', 
        'secondary-200': '#ffffff', 
        'secondary-300': '#A68CC6', 
        'tertiary-100': '#040B19', 
        'tertiary-200': '#192231', 
        'tertiary-300': '#3b4a64 ', 
    
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif ",
        "dm": "DM Serif Display, sans-serif "
      }
    },
  },
  plugins: [],
}