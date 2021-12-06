import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }
  & + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.primary};
  }
  &:disabled + label {
    opacity: 0.6;
    cursor: auto;
  }
  &:focus + label:before {
    border: 1px solid ${({ theme }) => theme.colors['gray-50']};
  }
  &:disabled + label:before {
    opacity: 0.6;
    cursor: auto;
  }
  &:checked + label:after {
    opacity: 1;
  }
  & + label:after {
    opacity: 0;
    transition: all 0.1s;
    content: '✔';
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const LabelCheckbox = styled.label`
  width: 20px;
  height: 20px;
`;
