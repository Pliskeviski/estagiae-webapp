import styled from 'styled-components';

interface ILoadingIndicator {
  size?: string;
}
export const LoadingIndicator = styled.span<ILoadingIndicator>`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  width: ${({ size }) => size || '30px'};
  height: ${({ size }) => size || '30px'};
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${({ color, theme }) => theme.colors[color || 'white']};
  animation: spinner 0.6s linear infinite;
`;
