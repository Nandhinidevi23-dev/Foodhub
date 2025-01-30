/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: { 'xs': '375px', 'lg': '1000px', // Add this line for a custom breakpoint at 375px 
      },
    },
  },
  plugins: [],
}

