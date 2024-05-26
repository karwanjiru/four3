/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        primary: '#333',
      },
    },
  },
  plugins: [],
}