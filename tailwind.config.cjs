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
    // require('tailwindcss'),
    // require('autoprefixer'),
    // // ... other plugins
  ],
};