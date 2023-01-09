/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      brand: {
        primary: 'rgb(var(--clr-brand-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-brand-secondary) / <alpha-value>)',
      },
      accent: {
        primary: 'rgb(var(--clr-accent-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-accent-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--clr-accent-tertiary) / <alpha-value>)',
      },
    },
    fontFamily: {
      'sans-serif': 'var(--ff-sans-serif)',
    },
    fontSize: {
      base: 'var(--fs-base)',
      sm: 'var(--fs-sm)',
    },
    fontWeight: {
      normal: 'var(--fw-normal)',
      medium: 'var(--fw-medium)',
    },
    extend: {},
  },
  plugins: [],
};
