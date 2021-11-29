import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body, #__next {
    margin: 0;
  }
`;
