import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2E6B',
          50: '#E8ECF7',
          100: '#C5CEEC',
          200: '#8EA2D9',
          300: '#5776C6',
          400: '#2F50B3',
          500: '#1B2E6B',
          600: '#162558',
          700: '#111C44',
          800: '#0B1230',
          900: '#06091C',
        },
        gold: {
          DEFAULT: '#C8960C',
          50: '#FDF6E3',
          100: '#F9E9B4',
          200: '#F3D273',
          300: '#EDBB32',
          400: '#C8960C',
          500: '#A07A0A',
          600: '#785C07',
          700: '#503D05',
          800: '#281F02',
          900: '#100C01',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
