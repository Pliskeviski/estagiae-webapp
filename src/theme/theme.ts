import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: '#3f6cdf',
    red: '#d93131',
    'gray-10': '#f5f5f5',
    'gray-50': '#b6b6b6',
    'gray-80': '#171716',
  },
  fonts: {
    primary: 'Gilroy, sans-serif',
    secondary: 'PlusJakarta, sans-serif',
    tertiary: 'Poppins, sans-serif',
  },
  fontSizes: {
    h5: '1.2rem',
    body: {
      large: '1.25rem',
      medium: '1rem',
      small: '0.8rem',
    },
    caption: '0.6rem',
  },
  containers: {
    large: '1100px',
  },
  breakpoints: {
    large: '1200px',
  },
};

export default Theme;
