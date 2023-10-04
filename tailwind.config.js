/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio'; // Importa el plugin

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [aspectRatio],
}

