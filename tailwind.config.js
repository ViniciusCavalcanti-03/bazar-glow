/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff5f7',
          100: '#fde4ea',
          200: '#f9c9d6',  // rosa da logo
          500: '#d4688a',
          600: '#bf4f73',
          700: '#a03d5c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

 