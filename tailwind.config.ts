import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        smoke: '#B5ACA3',
        black: '#1A1713',
        china: '#D4C8BE',
        cotton: '#F2F3EC',
        suede: '#B8926A'
      },
    },
  },
  plugins: [],
};
export default config;
