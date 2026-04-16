import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf3ea',
        'deep-brown': '#4a3223',
        'gold-dark': '#b28d55',
        'gold-light': '#e5c07d',
        'warm-gray': '#7a6a5b',
        'blush-dark': '#d8a39b',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
