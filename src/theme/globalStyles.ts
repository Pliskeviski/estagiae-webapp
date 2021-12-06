import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.body.medium};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 80%;
    }
  }

  body, #__next {
    margin: 0;
  }
`;

export const LimitedContainerCss = css`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.large};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 90vw;
  }
`;

export const LimitedContainer = styled.div`
  ${LimitedContainerCss};
`;
