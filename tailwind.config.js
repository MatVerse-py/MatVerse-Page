/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        mv: {
          950: '#060a10',
          900: '#0a1018',
          850: '#0e1520',
          800: '#131c2a',
          700: '#1e2d42',
          600: '#2a3f5a',
          500: '#3d5a80',
          400: '#5a8ab0',
          300: '#7db4d4',
          200: '#a8d0e8',
          100: '#d0e6f2',
          50: '#eaf3f9',
        },
        accent: {
          DEFAULT: '#00d4aa',
          light: '#33e0be',
          dark: '#00a888',
          glow: 'rgba(0, 212, 170, 0.15)',
        },
        omega: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        psi: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
};
