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
        dark: {
          background: {
            primary: '#0D1B2A',
            secondary: '#1B263B',
          },
          text: {
            primary: '#A3D5FF',
            secondary: '#9CA3AF',
          },
          accent: {
            primary: '#34C759',
            secondary: '#00A982',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
