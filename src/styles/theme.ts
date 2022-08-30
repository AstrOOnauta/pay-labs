import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        '&::-webkit-font-smoothing': 'antialiased',
        '&::-moz-osx-font-smoothing': 'grayscale',
      },
    },
    fonts: {
      lato: 'lato, sans-serif',
    },
    fontWeights: {
      normal: 400,
      black: 900,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.938rem',
      md: '1.125rem',
      lg: '1.375rem',
      xl: '1.563rem',
      '2xl': '1.75rem',
      '3xl': '2.5rem',
    },
    colors: {
      background: '#FFFFFF',
      grey: {
        50: '#FAFAFA',
        600: '#696969',
      },
      purple: {
        100: '#BE84FF',
        500: '#641EB4',
        800: '#36155C',
        900: '#2A1048',
      },
      blue: '#0096BE',
    },
  },
})

export default theme
