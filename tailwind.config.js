/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bcfc',
          400: '#7e99f9',
          500: '#5a73f2',
          600: '#3f4fe8',
          700: '#2f38d1',
          800: '#0F172A', // Deep blue
          900: '#0B1222', // Darker blue
          950: '#070d1a', // Almost black blue
        },
        secondary: {
          50: '#effbfa',
          100: '#d7f4f2',
          200: '#b3e9e8',
          300: '#84d7d7',
          400: '#50bac1',
          500: '#2f9da6',
          600: '#0D9488', // Teal
          700: '#0f7171',
          800: '#125b5b',
          900: '#134c4c',
          950: '#022c2f',
        },
        accent: {
          50: '#f6f4fe',
          100: '#ede9fd',
          200: '#ded7fc',
          300: '#c8b7f9',
          400: '#ac8ef3',
          500: '#9364eb',
          600: '#7E22CE', // Purple
          700: '#6c1bbd',
          800: '#59199d',
          900: '#4a177f',
          950: '#330c60',
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '20px 20px',
      },
    },
  },
  plugins: [],
};