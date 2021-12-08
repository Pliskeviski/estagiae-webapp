import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    primary: '#3f6cdf',
    red: '#d93131',
    'light-blue': '#fcfbff',
    'gray-10': '#f5f5f5',
    'gray-50': '#b6b6b6',
    'gray-60': '#b0afb2',
    'gray-80': '#171716',
  },
  fonts: {
    primary: 'Gilroy, sans-serif',
    secondary: 'PlusJakarta, sans-serif',
    tertiary: 'Poppins, sans-serif',
  },
  fontSizes: {
    h5: '1.25rem',
    body: {
      large: '1.2rem',
      medium: '1rem',
      small: '0.8rem',
    },
    caption: '0.6rem',
  },
  containers: {
    large: '1250px',
  },
  breakpoints: {
    large: '1200px',
    medium: '768px',
  },
};

export default Theme;
