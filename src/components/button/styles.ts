import styled, { css } from 'styled-components';

export const ContainerLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  display: flex;
`;

interface IStyledButton {
  isLoading: boolean;
  backgroundColor?: string;
  borderColor?: string;
  isDisabled: boolean;
  textColor?: string;
}
export const StyledButton = styled.button<IStyledButton>`
  border: none;
  outline: none;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  transition: all 0.2s;
  position: relative;
  font-weight: bold;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor || 'primary']};
  color: ${({ theme, textColor }) => theme.colors[textColor || 'gray-90']};
  cursor: pointer;
  ${({ theme, borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${theme.colors[borderColor]};
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
    `}
  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent;

      ${ContainerLoading} {
        opacity: 1;
      }
      > * {
        opacity: 0;
      }
    `}
`;
