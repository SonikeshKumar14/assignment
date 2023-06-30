/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins','sans-serif']
      },
      colors: {
        'mycolor': '#0A5783',
      },
      screens: {
        'device': '793px'
      }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
}