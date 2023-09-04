import plugin from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainbg: '#05050A',
        secondary: '#E94560',
        primary: '#444476',
        bgdarkest: '#10101e',
        // bgdarker: '#121221',
        bgdark: '#202038',
        borderline: '#1A1A2E',
        lightgray: '#CCCCCC',
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
