import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.large};
  padding: 1.8rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.body.large};
  color: ${({ theme }) => theme.colors.primary};
`;

type LinksContainer = {
  amount: number;
};
export const LinksContainer = styled.div<LinksContainer>`
  display: grid;
  grid-template-columns: ${({ amount }) => `repeat(${amount}, 1fr)`};
  grid-gap: 1rem;
`;

export const LinkItem = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
