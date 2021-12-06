import styled, { css } from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

type StyledInputType = {
  hasError: boolean;
  extraPaddingLeft?: boolean;
};
export const StyledInput = styled.input<StyledInputType>`
  border: 0;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors['gray-50']};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0.8rem 1rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  color: ${({ theme }) => theme.colors['gray-80']};
  width: 100%;

  ${({ extraPaddingLeft }) =>
    extraPaddingLeft &&
    css`
      padding-left: 2.2rem !important;
    `}

  transition: all 0.2s;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  ::placeholder {
    font-family: inherit;
    color: ${({ theme }) => theme.colors['gray-50']};
    font-size: ${({ theme }) => theme.fontSizes.body.small};
  }
`;

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors['black-70']};
  font-size: ${({ theme }) => theme.fontSizes.body.medium};
  font-weight: bold;
  padding-bottom: 4px;
  text-align: initial;
`;

type ErrorMessageType = {
  isActive: boolean;
};
export const ErrorMessage = styled.div<ErrorMessageType>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  opacity: 1;
  transition: all 0.2s 0.05s;
  position: absolute;
  bottom: -5px;
  font-weight: bold;

  ${({ isActive }) =>
    !isActive &&
    css`
      transition: all 0.2s 0.2s;
      opacity: 0;
    `}
`;

export const InputInnerCointainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputBeforeLabel = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-80']};
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSizes.body.small};
`;

export const IconContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors['gray-50']};
  }
`;
