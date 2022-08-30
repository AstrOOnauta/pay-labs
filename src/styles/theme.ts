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
  },
  fonts: {
    lato: 'lato, sans-serif',
  },
  fontWeights: {
    normal: 400,
    black: 900,
  },
  fontSizes: {
    xs: '12px',
    sm: '15px',
    md: '18px',
    lg: '22px',
    xl: '25px',
    '2xl': '28px',
    '3xl': '45px',
  },
  colors: {
    white: '#FFFFFF',
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
})

export default theme
