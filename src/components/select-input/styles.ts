import styled, { css } from 'styled-components';

import AsyncSelect from 'react-select/async';

interface IStyledSelect {
  hasIcon: boolean;
  icon?: any;
}
export const StyledSelect = styled(AsyncSelect)<IStyledSelect>`
  .select__control {
    border: 0;
    position: relative;
  }
  .select__value-container {
    text-align: left;
    padding: 0;
    > div {
      width: 100%;
      border: 0;
      padding: 0;
      margin: 0;
    }
  }
  .select__control--is-focused {
    border: 0 !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
  .select__option {
    transition: all 0.1s;
    text-align: left;

    font-size: ${({ theme }) => theme.fontSizes.body.small};

    &:active {
      background-color: transparent;
    }
  }
  .select__menu {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
  .select__menu-list {
    width: 100%;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .select__option--is-focused {
    background-color: transparent;
  }
  .select__option--is-selected {
    background-color: transparent;
    color: ${({ theme }) => theme.colors['gray-80']};
  }
  .select__input-container,
  .select__single-value {
    color: ${({ theme }) => theme.colors['gray-80']};
    font-size: ${({ theme }) => theme.fontSizes.body.small};
  }
  .select__placeholder {
    color: ${({ theme }) => theme.colors['gray-50']};
    font-size: ${({ theme }) => theme.fontSizes.body.small};
  }
  .select__menu-notice--loading,
  .select__menu-notice--no-options {
    color: ${({ theme }) => theme.colors['gray-50']};
    font-size: ${({ theme }) => theme.fontSizes.body.small};
  }
  input {
    width: 100% !important;
  }
  .input > div > div {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      .select__placeholder,
      .select__value-container {
        padding-left: 2.2rem;
      }

      svg {
        color: ${({ theme }) => theme.colors['gray-50']};
      }
    `};
`;

interface IContainerOption {
  isSelected: boolean;
}
export const ContainerOption = styled.div<IContainerOption>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-weight: bold;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

interface IImageOption {
  imageUrl: string;
}
export const ImageOption = styled.div<IImageOption>`
  background-image: url(${({ imageUrl }) => imageUrl});
  width: 100px;
  height: 50px;
  margin-right: 12px;
  background-size: cover;
  border-radius: 4px;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  top: -50%;
  transform: translateY(36%);
`;

export const ContainerCustomInput = styled.div``;
