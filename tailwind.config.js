/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1f3a34',
        pine: '#274239',
        cream: '#f7f2e9',
        beige: '#e2d2bc',
        gold: '#c29b59',
        ink: '#2c2823',
        muted: '#5c564e',
        cloud: '#ffffff'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgb(31 58 52 / 0.15)'
      },
      borderRadius: {
        '2lg': '1.25rem'
      }
    }
  },
  plugins: []
}

