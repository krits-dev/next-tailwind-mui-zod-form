import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        50: '#f4f4f4',
        100: '#e1e1e1',
        200: '#dcdee0',
        300: '#a6abb0',
      },

      white: {
        50: '#ffffff',
        100: '#f4f4f4',
      },
      blue: '#526ed3',
      red: '#ef4e57',
      green: '#51d85e',
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      spacing: {
        '23': '5.75rem',
        '41.5': '10.375rem',
      },
      minWidth: {
        '90': '22.5rem',
      },
      maxWidth: {
        '151': '37.75rem',
        '212.5': '53.125rem',
      },
      width: {
        '19.5': '4.875rem',
        '36.5': '9.125rem',
        '59.5': '14.875rem',
        '129.5': '32.375rem',
        '140': '35rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
