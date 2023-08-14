import plugin from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#ff9900',
      },
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        'not-last:',
        '&:not(:last-child)'
      );
    }),
  ],
};
