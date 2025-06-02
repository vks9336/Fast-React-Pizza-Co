/**@type {import('tailwindcss').Config}*/
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugin: [],
};
