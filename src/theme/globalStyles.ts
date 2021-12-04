import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body, #__next {
    margin: 0;
  }
`;

export const LimitedContainerCss = css`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.large};
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 95vw;
  }
`;

export const LimitedContainer = styled.div`
  ${LimitedContainerCss};
`;
