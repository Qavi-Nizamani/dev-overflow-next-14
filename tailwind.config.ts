import type { Config } from 'tailwindcss'
const myPlugin = ({ addUtilities }) => {
  addUtilities({
    '.background-light850_dark100': {
      '@apply bg-light-850 dark:bg-dark-100': {}
    },

    '.background-light900_dark200': {
      '@apply bg-light-900 dark:bg-dark-200': {}
    },

    '.background-light900_dark300': {
      '@apply bg-light-900 dark:bg-dark-300': {}
    },

    '.background-light800_darkgradient': {
      '@apply bg-light-800 dark:dark-gradient': {}
    },

    '.background-light800_dark400': {
      '@apply bg-light-800 dark:bg-dark-400 !important': {}
    },

    '.background-light700_dark400': {
      '@apply bg-light-700 dark:bg-dark-400': {}
    },

    '.background-light700_dark300': {
      '@apply bg-light-700 dark:bg-dark-300': {}
    },

    '.background-light800_dark300': {
      '@apply bg-light-800 dark:bg-dark-300 !important': {}
    },

    '.text-dark100_light900': {
      '@apply text-dark-100 dark:text-light-900 !important': {}
    },

    '.text-dark200_light900': {
      '@apply text-dark-200 dark:text-light-900': {}
    },

    '.text-dark200_light800': {
      '@apply text-dark-200 dark:text-light-800 !important': {}
    },

    '.text-dark300_light700': {
      '@apply text-dark-300 dark:text-light-700': {}
    },

    '.text-dark400_light700': {
      '@apply text-dark-400 dark:text-light-700': {}
    },

    '.text-dark500_light700': {
      '@apply text-dark-500 dark:text-light-700 !important': {}
    },

    '.text-dark500_light500': {
      '@apply text-dark-500 dark:text-light-500': {}
    },

    '.text-dark300_light900': {
      '@apply text-dark-300 dark:text-light-900 !important': {}
    },

    '.text-dark400_light800': {
      '@apply text-dark-400 dark:text-light-800': {}
    },

    '.text-dark400_light500': {
      '@apply text-dark-400 dark:text-light-500': {}
    },

    '.text-dark400_light900': {
      '@apply text-dark-400 dark:text-light-900 !important': {}
    },

    '.text-light400_light500': {
      '@apply text-light-400 dark:text-light-500 !important': {}
    },

    '.light-border': {
      '@apply border-light-800 dark:border-dark-300': {}
    },

    '.light-border-2': {
      '@apply border-light-700 dark:border-dark-400 !important': {}
    },

    '.h1-bold': {
      '@apply text-[30px] font-bold leading-[42px] tracking-tighter': {}
    },

    '.h2-bold': {
      '@apply text-[24px] font-bold leading-[31.2px]': {}
    },

    '.h2-semibold': {
      '@apply text-[24px] font-semibold leading-[31.2px]': {}
    },

    '.h3-bold': {
      '@apply text-[20px] font-bold leading-[26px]': {}
    },

    '.h3-semibold': {
      '@apply text-[20px] font-semibold leading-[24.8px]': {}
    },

    '.base-medium': {
      '@apply text-[18px] font-medium leading-[25.2px]': {}
    },

    '.base-semibold': {
      '@apply text-[18px] font-semibold leading-[25.2px]': {}
    },

    '.base-bold': {
      '@apply text-[18px] font-bold leading-[140%]': {}
    },

    '.paragraph-regular': {
      '@apply text-[16px] font-normal leading-[22.4px]': {}
    },

    '.paragraph-medium': {
      '@apply text-[16px] font-medium leading-[22.4px]': {}
    },

    '.paragraph-semibold': {
      '@apply text-[16px] font-semibold leading-[20.8px]': {}
    },

    '.body-regular': {
      '@apply text-[14px] font-normal leading-[19.6px]': {}
    },

    '.body-medium': {
      '@apply text-[14px] font-medium leading-[18.2px]': {}
    },

    '.body-semibold': {
      '@apply text-[14px] font-semibold leading-[18.2px]': {}
    },

    '.small-regular': {
      '@apply text-[12px] font-normal leading-[15.6px]': {}
    },

    '.small-medium': {
      '@apply text-[12px] font-medium leading-[15.6px]': {}
    },

    '.small-semibold': {
      '@apply text-[12px] font-semibold leading-[15.6px]': {}
    },

    '.subtle-medium': {
      '@apply text-[10px] font-medium leading-[13px] !important': {}
    },

    '.subtle-regular': {
      '@apply text-[10px] font-normal leading-[13px]': {}
    },

    '.placeholder': {
      '@apply placeholder:text-light-400 dark:placeholder:text-light-500': {}
    },

    '.invert-colors': {
      '@apply invert dark:invert-0': {}
    },

    '.shadow-light100_dark100': {
      '@apply shadow-light-100 dark:shadow-dark-100': {}
    },

    '.shadow-light100_darknone': {
      '@apply shadow-light-100 dark:shadow-none': {}
    },

    '.primary-gradient': {
      background: 'linear-gradient(129deg, #ff7000 0%, #e2995f 100%)'
    },

    '.dark-gradient': {
      background:
        'linear-gradient(232deg,rgba(23, 28, 35, 0.41) 0%,rgba(19, 22, 28, 0.7) 100%)'
    }
  })
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          500: '#FF7000',
          100: '#FFF1E6'
        },
        dark: {
          100: '#000000',
          200: '#0F1117',
          300: '#151821',
          400: '#212734',
          500: '#101012'
        },
        light: {
          900: '#FFFFFF',
          800: '#F4F6F8',
          850: '#FDFDFD',
          700: '#DCE3F1',
          500: '#7B8EC8',
          400: '#858EAD'
        },
        'accent-blue': '#1DA1F2'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-spaceGrotesk)']
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)'
      },
      backgroundImage: {
        'auth-dark': "url('/assets/images/auth-dark.png')",
        'auth-light': "url('/assets/images/auth-light.png')"
      },
      screens: {
        xs: '420px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    myPlugin
  ]
}

export default config
