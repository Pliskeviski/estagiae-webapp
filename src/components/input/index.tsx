import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  ContainerInput,
  ErrorMessage,
  IconContainer,
  InputBeforeLabel,
  InputInnerCointainer,
  StyledInput,
  StyledLabel,
} from './styles';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface IInputProps {
  type?: InputType;
  name?: string;
  value?: any;
  placeholder?: string;
  label?: string;
  error?: string;
  beforeLabel?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  disableAutoComplete?: boolean;
  maxLength?: number;
  children?: ReactNode;
  icon?: IconType;
}

export const Input = ({
  type,
  name,
  value,
  placeholder,
  label,
  error,
  beforeLabel,
  onChange,
  onBlur,
  onFocus,
  className,
  maxLength,
  disableAutoComplete,
  children,
  icon: Icon,
}: IInputProps) => {
  const hasIcon = !!Icon;

  return (
    <ContainerInput className={className}>
      {hasIcon && (
        <IconContainer>
          <Icon size="1.2rem" />
        </IconContainer>
      )}

      {label && <StyledLabel>{label}</StyledLabel>}
      <InputInnerCointainer>
        {beforeLabel && <InputBeforeLabel>{beforeLabel}</InputBeforeLabel>}
        <StyledInput
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          hasError={!!error}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
          autoComplete={disableAutoComplete && 'off'}
          extraPaddingLeft={hasIcon}
        />
      </InputInnerCointainer>
      <ErrorMessage isActive={!!error}>{error}</ErrorMessage>
      {children}
    </ContainerInput>
  );
};
