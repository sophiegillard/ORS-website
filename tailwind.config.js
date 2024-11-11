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
        "pink":"#FFDCD1",
        "white": "#FFF6F3",
      },
      fontFamily: {
        'gyst': ['"gyst-variable"', 'sans-serif'],
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'script': ['"Dancing Script"', 'cursive'],
      },
    extend: {
      colors:{
        "grey": "#47474C",
        "off-white": "#FFF6F3",
        "brown": "#C16357",
        "blue": "#DBE7FF",
        "dark-blue":"#5863F8",
        "pink":"#FFDCD1",
        "blue-hover": "#c5d1eb",
        "brown-hover": "#ae564a",
      }, 
      
    },
  },
  plugins: [],
}

