const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#E64949',
      'primary-100': '#E36C6C',
      'second-primary': '#4A4B67',
      'third-primary': 'rgba(34, 34, 34, 1)',
      'fourth-primary': '#F7D247',
      'fifth-primary': '#F3F3F3',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
    },
    screens: {
      '2xl': {
        'min': '1536px'
      },
      'xl': {
        'min': '1280px'
      },
      'lg': {
        'min': '1024px'
      },
      'md': {
        'min': '768px'
      },
      'sm': {
        'min': '639px'
      },
      // => @media (max-width: 639px) { ... }
      'max-2xl': {
        'max': '1535px'
      },
      // => @media (max-width: 1535px) { ... }
      'max-xl': {
        'max': '1279px'
      },
      // => @media (max-width: 1279px) { ... }
      'max-lg': {
        'max': '1023px'
      },
      'max-ll': {
        'max': '1217px'
      },
      // => @media (max-width: 1023px) { ... }
      'max-md': {
        'max': '767px'
      },
      // => @media (max-width: 767px) { ... }
      'max-sm': {
        'max': '639px'
      },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '5xl': ['36px', '42px'],
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      // gridTemplateColumns: {
      //   // Simple 16 column grid
      //  '16': 'repeat(16, minmax(0, 1fr))',

      //   // Complex site-specific column configuration
      //  'process-grid': '200px minmax(900px, 1fr) 100px',
      // },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}