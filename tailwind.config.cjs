/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: ['0.875rem', { lineHeight: '1.25rem' }],
      sm: ['1rem', { lineHeight: '1.5rem' }],
      md: ['1.125rem', { lineHeight: '1.75rem' }],
      lg: ['1.25rem', { lineHeight: '1.75rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      gray: {
        50: '#848383',
        100: '#7a7979',
        200: '#706f6f',
        300: '#666565',
        400: '#5c5b5b',
        500: '#525151',
        600: '#484747',
        700: '#3e3d3d',
        800: '#343333',
        900: '#2a2929',
      },
      blue: {
        50: '#9cd1e6',
        100: '#92c7dc',
        200: '#88bdd2',
        300: '#7eb3c8',
        400: '#74a9be',
        500: '#6a9fb4',
        600: '#6095aa',
        700: '#568ba0',
        800: '#4c8196',
        900: '#42778c',
      },
      amaranth: {
        50: '#ff5180',
        100: '#ff4776',
        200: '#ff3d6c',
        300: '#fe3362',
        400: '#f42958',
        500: '#ea1f4e',
        600: '#e01544',
        700: '#d60b3a',
        800: '#cc0130',
        900: '#c20026',
      },
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },

    plugins: [],
  },
};
