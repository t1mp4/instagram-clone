/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      brand: {
        primary: 'rgb(38, 38, 38)',
        secondary: 'rgb(0, 149, 246)',
      },
      accent: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgb(250, 250, 250)',
      },
    },
    fontFamily: {
      'sans-serif': 'var(--ff-sans-serif)',
    },
    fontSize: {
      base: '.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
    },
    extend: {},
  },
  plugins: [],
};
