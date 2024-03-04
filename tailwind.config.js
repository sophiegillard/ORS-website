/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      colors:{
        "grey": "#47474C",
        "off-white": "#FFF6F3",
        "brown": "#C16357",
        "blue": "#DBE7FF",
        "dark-blue":"#5863F8",
        "pink":"#FFBFA9",
      },
    extend: {
      colors:{
        "grey": "#47474C",
        "off-white": "#FFF6F3",
        "brown": "#C16357",
        "blue": "#DBE7FF",
        "dark-blue":"#5863F8",
        "pink":"#FFBFA9",
        "blue-hover": "#c5d1eb",
        "brown-hover": "#ae564a",
      }, 
      
    },
  },
  plugins: [],
}

