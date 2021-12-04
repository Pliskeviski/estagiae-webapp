import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: 'green',
    red: '#d93131',
    'gray-10': '#ededed',
    'gray-50': '#b6b6b6',
    'gray-80': '#171716',
  },
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'PlusJakarta, sans-serif',
    tertiary: 'Nunito, sans-serif',
  },
  fontSizes: {
    body: {
      large: '1.4rem',
      medium: '0.85rem',
      small: '0.6rem',
    },
    caption: '0.6rem',
  },
  containers: {
    lg: '1200px',
  },
};

export default Theme;