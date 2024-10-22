import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        light: {
          background: 'rgb(246 252 255)',
          primary: 'rgb(18 50 116)',
          secondary: 'rgb(124 172 6)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
