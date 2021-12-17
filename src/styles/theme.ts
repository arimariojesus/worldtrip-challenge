import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    yellow: {
      "300": "rgba(255, 186, 8, 0.5)",
      "400": "#FFBA08"
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
});
