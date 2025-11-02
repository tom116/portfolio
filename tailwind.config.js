/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // UMBC blue
        twitch: {
          dark: '#0e0e10',
          darker: '#040404',
          purple: '#9146ff',
          purpleHover: '#772ce8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '900px',
      }
    },
  },
  plugins: [],
}

