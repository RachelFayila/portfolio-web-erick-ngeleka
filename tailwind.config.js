/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // Tous les fichiers HTML à la racine
    "./**/*.html",        // Tous les fichiers HTML dans les sous-dossiers
    "./*.js",             // Tous les fichiers JS à la racine
    "./**/*.js"           // Tous les fichiers JS dans les sous-dossiers
  ],
  theme: {
    extend: {
      colors: {
        'night-blue': '#0a192f',
        'navy': '#112240',
        'light-navy': '#233554',
        'slate': '#8892b0',
        'light-slate': '#ccd6f6',
        'yellow-accent': '#fbbf24',
        'yellow-dark': '#f59e0b'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}